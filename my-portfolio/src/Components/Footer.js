import footer_icon from '../assets/footer_icon.png'; // Ensure this is an image file

function Footer() {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-gray-100 text-neutral-content justify-center items-center p-4">
                <aside className="grid-flow-col items-center flex">
                    <img 
                        src={footer_icon}
                        alt="Company Logo"
                        className="ml-2 w-6 h-6"
                    />
                    <p className="ml-2 text-black">
                        Copyright © {new Date().getFullYear()} - All rights reserved
                    </p>
                </aside>
            </footer>
        </div>
    );
}

export default Footer;
