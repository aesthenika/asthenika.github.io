function Footer(){
    return <footer className="page-footer #bcaaa4 brown lighten-3">
        <div className="footer-copyright  ">
            <div className="container brown-text text-darken-4">
                {new Date().getFullYear()}
                aesthenika
                <a className="brown-text text-darken-4 right" href="!#">
                    Repository
                </a>
            </div>
        </div>
    </footer> 
}
export { Footer };