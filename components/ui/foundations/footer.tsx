
const Footer = () => {
    return (
        <footer className="bg-card px-2 py-4 h-[65px] flex justify-center items-center">
            <p className="text-sm text-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </footer>
    )
}

export default Footer