import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#e6f0fa] m-0 p-0">
            <div className="w-4/5 max-w-[1200px] bg-white rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="bg-[#064d9b] text-white text-center p-2 flex items-center justify-center">
                    <img src="logo.jpg" alt="ETC Logo" className="h-12 mr-2.5" />
                    <h1 className="m-0 text-lg">欢迎访问山东省高速公路ETC智能客服</h1>
                </div>
                <div className="relative pb-0 h-auto min-h-[600px] overflow-auto">
                    <iframe
                        src="http://localhost:8089/chat/share?shared_id=8be68f1218a011f0bebe4232e9ced673&from=chat&auth=lmYTdhNDQ0MDYwMDExZjBhNWQ4NzZkOW"
                        style={{ width: '100%', height: '100%', minHeight: '600px' }}
                        frameBorder="0"
                    ></iframe>
                </div>
                <div className="bg-[#333333] text-white text-center p-2.5">
                    <p className="m-0 text-sm">Copyright © 2025 山东省高速公路ETC智能客服</p>
                </div>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);    
