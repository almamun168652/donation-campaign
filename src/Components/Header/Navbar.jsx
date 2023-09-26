import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

    const loc = useLocation();

    return (
        <div className={loc.pathname === '/' ? 'absolute w-full' : 'w-full'}>
            <div className="my-5 max-w-screen-xl px-4 md:px-8 mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <NavLink to="/">
                        <img className="w-52" src="https://i.ibb.co/8ss0Ff7/Logo.png" alt="logo" />
                    </NavLink>
                </div>
                <ul className="flex gap-10">
                    <li className="font-semibold">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }>
                            Home
                        </NavLink>
                    </li>

                    <li className="font-semibold">
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }>
                            Donation
                        </NavLink>
                    </li>

                    <li className="font-semibold">
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }>
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;