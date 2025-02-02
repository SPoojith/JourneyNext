import fs from 'fs';
import path from 'path';

interface ReviewCardProps {
  altText: string;
  imageSrc: string;
  title: string;
  subheaderLink: string;
  bodyText: string;
}

// Path to the file where the testimonials are stored
const TestimentsFilePath = path.join(process.cwd(), 'Testiments.json');
const TestimentsImagePath = path.join(process.cwd(), 'public/Assests/Testimonial');

// Sample data (just for fallback)
const DataList: ReviewCardProps[] = [
  {
    altText: 'Aparna A',
    imageSrc: '',
    title: 'Aparna A',
    subheaderLink: 'https://www.linkedin.com/in/aparna-a-00150446/',
    bodyText: 'Quick grasping skill, keen learner, collaborative, ownership of deliverables. Team player with moral collaborative conduct1.',
  },
  {
    altText: 'Aparna A',
    imageSrc: '',
    title: 'Aparna A',
    subheaderLink: 'https://www.linkedin.com/in/aparna-a-00150446/',
    bodyText: 'Quick grasping skill, keen learner, collaborative, ownership of deliverables. Team player with moral collaborative conduct2.',
  },
  {
    altText: 'Aparna A',
    imageSrc: '',
    title: 'Aparna A',
    subheaderLink: 'https://www.linkedin.com/in/aparna-a-00150446/',
    bodyText: 'Quick grasping skill, keen learner, collaborative, ownership of deliverables. Team player with moral collaborative conduct2.',
  },
  // Add more sample data as needed
];

// Function to write data to the file
const writeTestimentToFile = (data: ReviewCardProps[]): void => {
  const jsonData = JSON.stringify(data, null, 2); // Format with 2 spaces for readability
  fs.writeFileSync(TestimentsFilePath, jsonData, 'utf8');
};

// Function to read testimonials from the file
const readTestimentsFromFile = (): ReviewCardProps[] => {
  try {
    const data = fs.readFileSync(TestimentsFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    writeTestimentToFile(DataList); // Fallback to default data if the file doesn't exist
    return DataList; // Return default data
  }
};

// GET API Route - Returns the list of testimonials
export async function GET() {
  const data = readTestimentsFromFile();
  return new Response(
    JSON.stringify(data),
    { status: 200 }
  );
}

const saveFile = async (file: File, filename: string): Promise<string> => {
  const buffer = Buffer.from(await file.arrayBuffer()); // Convert the file to a Buffer

  try {
    // Detect the file's MIME type from the file's content
    const mimeType = file.type; // This comes from the FormData or the file object

    let extension: string;

    // Determine the file extension based on the MIME type
    if (mimeType === 'image/png') {
      extension = '.png';
    } else if (mimeType === 'image/jpeg' || mimeType === 'image/jpg') {
      extension = '.jpg';
    } else {
      throw new Error('Unsupported file type');
    }

    const newFilename = `${filename}${extension}`;
    const filePath = path.join(TestimentsImagePath, newFilename);

    // Write the file to disk
    fs.writeFileSync(filePath, buffer);

    console.log(`File saved at: ${filePath}`);
    return newFilename;
  } catch (error) {
    console.error('Error saving file:', error);
    throw new Error('Error saving the file');
  }
};
// POST API Route - Adds a new testimonial
export async function POST(req: Request) {
  try {
    // Parse the incoming JSON body
    // const requestData: ReviewCardProps = req.body; // req.body will be automatically parsed by Next.js
    const formData = await req.formData(); // req.body will be automatically parsed by Next.js
    const altText =  formData.get('altText')?.toString();
    const imageSrc =  formData.get('imageSrc')?.toString();
    const title =  formData.get('title')?.toString();
    const subheaderLink =  formData.get('subheaderLink')?.toString();
    const bodyText =  formData.get('bodyText')?.toString();
    const file = formData.get('file') as File;
    const filePath = await saveFile(file, imageSrc || "");
    // Read the current data from the file
    const data = readTestimentsFromFile();

    // Add the new object with data from the body
    data.push({
      altText: altText || "",
      imageSrc: filePath || '',
      title: title || '',
      subheaderLink: subheaderLink || '',
      bodyText: bodyText || '',
    });

    // // Write the updated data back to the file
    writeTestimentToFile(data);

    // Respond with a success message
    return new Response(
      JSON.stringify({ message: 'Successfully added' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in POST request:', error);
    return new Response(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 200 }
    );
  }
}

