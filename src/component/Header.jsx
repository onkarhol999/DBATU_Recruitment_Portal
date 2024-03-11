import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Top Section */}
      <div className="bg-white p-4 rounded-md mb-2 flex items-center justify-center">
      <img className=" w- h-32 mr-2" src="https://dbatu.ac.in/wp-content/uploads/2022/12/cropped-OQSD-Wtj.jpeg" alt="College Logo" />
  <div className="text-center">
    <div className="text-3xl font-bold">
      <p className="text-3xl font-bold text-blue-950">Dr. Babasaheb Ambedkar Technological University</p> 
      <p className="text-lg mt-1">डॉ. बाबासाहेब आंबेडकर तंत्रशास्त्र विद्यापीठ</p>
      <p className="text-lg">Lonere-402103, Tal-Mangaon, Dist-Raigad (M.S.) India</p>
      <p className="text-lg mt-2 text-1xl">Recruitment Portal</p>
    </div>
  </div>
</div>


 {/* Bottom Section */}
<nav className="mt-2 p-4 rounded-md bg-blue-400 flex items-center justify-between">
  <div className="flex items-center space-x-8">
    <a className="hover:underline bg-blue-800 text-white rounded-md px-6 py-2" href="/">Home</a>
    <a className="hover:underline bg-blue-800 text-white rounded-md px-6 py-2" href="/profile">Profile</a>
    <a className="hover:underline bg-blue-800 text-white rounded-md px-6 py-2" href="/job-applications">Job Applications</a>
    <a className="hover:underline bg-blue-800 text-white rounded-md px-6 py-2" href="/my-applied-schemes">My Applied Schemes</a>
  </div>
  <div className=" flex items-center">
  <a className="hover:underline text-white  mr-4" href="/my-applied-schemes">User Name</a>
  <img className="w-8 h-8 cursor-pointer" src="/images/user.png" alt="User Icon" />
  </div>
</nav>



    </header>
  );
};

export default Header;
