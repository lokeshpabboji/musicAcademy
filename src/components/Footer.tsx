export default function Footer(){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t-2 border-gray-600 py-8">
            <div className="p-4">
                <h5 className="text-xl text-white mb-2">About Us</h5>
                <p className="text-gray-400">Music School is a premier institution dedidcated to teacing the art and science of music. We nuuture talent from the ground up fostering a vibrant community of musicians</p>
            </div>
            <div className="p-4">
                <h5 className="text-xl text-white mb-2">Quick Links</h5>
                <p className="text-gray-400">Home</p>
                <p className="text-gray-400">About</p>
                <p className="text-gray-400">Courses</p>
                <p className="text-gray-400">Contact</p>
            </div>
            <div className="p-4">
                <h5 className="text-xl text-white mb-2">Follow Us</h5>
                <p className="text-gray-400">Facebook</p>
                <p className="text-gray-400">Instagram</p>
                <p className="text-gray-400">Twitter</p>
            </div>
            <div className="p-4">
                <h5 className="text-xl text-white mb-2">Contact Us</h5>
                <p className="text-gray-400">Hyderabad, India</p>
                <p className="text-gray-400">Hyderabad | 500001</p>
                <p className="text-gray-400">Email : info@musicschool.com</p>
            </div>
        </div>
    )
}