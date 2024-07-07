import React, { useState } from "react";

const Register = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user, [name]: value
        })
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">تسجيل الدخول</h2>
                <div>
                    <label className="block mb-1 text-gray-600">الإسم</label>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                    />
                    <div className='error username text-red-500 text-sm'></div>
                </div>

                <div>
                    <label className="block mb-1 text-gray-600">البريد الإلكتروني</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                    />
                    <div className='error email text-red-500 text-sm'></div>
                </div>
                <div>
                    <label className="block mb-1 text-gray-600">كلمة السر</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                    />
                    <div className='error password text-red-500 text-sm'></div>
                </div>

                <div>
                    <label className="block mb-1 text-gray-600">تأكيد كلمة السر</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                    />
                    <div className='error confirm-password text-red-500 text-sm'></div>
                </div>

                <button type="submit" className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700">تسجيل</button>
            </form>
        </div>
    );
};
export default Register;