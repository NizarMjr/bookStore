import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [login, setLogin] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const { name, value } = e;
        setLogin({
            ...login, [name]: value
        })
    }
    return (
        <div className="w-full max-w-md mx-auto my-8 p-8 bg-white rounded shadow-md h-[400px]">
            <form>
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">الدخول</h2>
                <div className="mb-4">
                    <label className="block mb-1 text-gray-600">البريد الإلكتروني</label>
                    <input
                        type="email"
                        name="email"
                        value={login.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                    />
                    <div className='error email text-red-500 text-sm'></div>
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-gray-600">كلمة السر</label>
                    <input
                        type="password"
                        name="password"
                        value={login.password}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                    />
                    <div className='error password text-red-500 text-sm'></div>
                </div>

                <button type="submit" className="w-36 block mx-auto  p-2 text-white bg-blue-600 rounded hover:bg-blue-700 mt-16">دخول</button>
                <p className="mt-4 text-center text-gray-600">
                    ليس لديك حساب؟ <Link to="/register" className="text-blue-600 hover:underline">سجل هنا</Link>
                </p>
            </form>
        </div>

    )
}
export default Login;