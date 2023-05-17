import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <Link className="btn bg-[#ff8c98] border-transparent hover:bg-white hover:text-[#ff8c98] hover:border-[#ff8c98] sticky top-0" to='/'>Back to Home</Link>
            <img className="max-h-screen mx-auto" src="https://t3.ftcdn.net/jpg/03/87/39/32/360_F_387393212_rV8UHuwUkzBA22YikFjHVkQxKjaF9wPq.jpg" alt="" />
        </div>
    );
};

export default ErrorPage;