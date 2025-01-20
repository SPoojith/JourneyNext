import './Footer.css';

interface FooterProps {
    Data: string | null;  // Allow Data to be string or null if API fails
}

function Footer({ Data }: FooterProps) {
    return <div>{ Data || "Loading..."}</div>;
}

export default Footer;
