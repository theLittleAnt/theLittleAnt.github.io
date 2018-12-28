function Footer(){
    return (
    <footer>
        <div>
            <hr />
            <p>
                the little anthill<br />&copy;2018.12
            </p>
        </div>
    </footer>);
}

ReactDOM.render(
    <Footer />,
    document.querySelector(".footer")
);