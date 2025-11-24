export default function Header() {
    return (
        <header className="header">
            <img className="profile-pic" src="./public/profile-picture.jpg" />
            <h1>Kenneth Paige</h1>
            <p className="gold-text">Frontend Developer</p>
            <p>kpwebdevelopment@gmail.com</p>
            <div className="button-div">
                <button className="button"><i class="fa-solid fa-envelope"></i> Email</button>
                <button className="button"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>
        </header>
    )
}