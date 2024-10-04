import ToggleTheme from "../ToogleTheme/toggleTheme"

const Header = ({user}) => {
    return <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm: m-5">
        <span className="text-gray-100">Ola, {user?.name || "Usuario"}</span>
        <h1>Alura Newsletter</h1>
        <ToggleTheme/>
    </div>
}

export default Header