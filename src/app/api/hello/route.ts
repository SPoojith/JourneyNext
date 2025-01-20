import fs from 'fs';
import path from 'path';

// Path to the file where the count is stored
const countFilePath = path.join(process.cwd(), 'count.json');

// Function to read the count from the file
const readCountFromFile = (): number => {
  try {
    const data = fs.readFileSync(countFilePath, 'utf8');
    const parsedData = JSON.parse(data);
    return parsedData.count || 0; // Return the count if it exists, otherwise 0
  } catch (Error : unknown) {
    // If the file doesn't exist or is invalid, return 0
    console.log(Error)
    return 0;
  }
};

// Function to update the count in the file
const writeCountToFile = (count: number) => {
  const data = JSON.stringify({ count }, null, 2);
  fs.writeFileSync(countFilePath, data, 'utf8');
};

export async function GET() {
  // Read the current count from the file
  let count = readCountFromFile();

  // Increment the count
  count++;

  // Update the count in the file
  writeCountToFile(count);

  // Return the updated count in the response
  return new Response(
    JSON.stringify({Data : `this site is opened ${count} times`}),
    { status: 200 }
  );
}