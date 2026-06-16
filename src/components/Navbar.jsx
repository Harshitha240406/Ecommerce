const Navbar=()=>{
    return(
        <>
        <header className="flex items-center justify-between bg-green-800  py-2  text-slate-50">
            <div >
                <h1 className="text-5xl">Shop It</h1>
            </div>
            <nav className=" ml-auto flex items-center gap-6">
                <span class="material-symbols-outlined text-5xl hover:cursor-pointer">
                favorite
                </span>
                <span class="material-symbols-outlined text-5xl hover:cursor-pointer">
                shopping_cart
                </span>
                <span class="material-symbols-outlined text-5xl hover:cursor-pointer">
                account_circle
                </span>
            </nav>
        </header>
        </>
    )
}
export default Navbar;