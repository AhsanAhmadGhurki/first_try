function Header() {
  return (
    <>
      <nav className="bg-indigo-200 w-full h-14 flex justify-between items-center px-4 md:px-4">
        <div className="text-2xl font-bold text-indigo-700">GHURKI</div>
        <ul className="flex">
          <li className="mx-[10px] cursor-pointer">Item 1</li>
          <li className="mx-[10px] cursor-pointer">Item 2</li>
          <li className="mx-[10px] cursor-pointer">Item 3</li>
        </ul>
        <div className="bg-indigo-700 hidden md:block p-2 text-white rounded font-bold cursor-pointer">
          LogIn/SignUp
        </div>
        <div className="md:hidden text-3xl">
          <a href="#" className="text-indigo-700 font-bold">
            &#8801;
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
