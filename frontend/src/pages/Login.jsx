export default function Login() {
    return (
        <div className="max-w-md mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

            <form className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-lg px-4 py-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-lg px-4 py-2"
                />

                <button className="w-full bg-green-700 text-white py-2 rounded-lg">
                    Login
                </button>
            </form>
        </div>
    );
}
