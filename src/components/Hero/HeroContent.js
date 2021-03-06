const HeroContent = () => {
    return (
        <div className="hero__content md:w-1/2 md:pr-5">
            <h4 className="text-blue-600 font-bold md:mb-3">Hello, I'am Maulana</h4>
            <h2 className="text-2xl md:text-4xl my-3 md:mb-5 leading-tight font-bold">Programming is not about Typing. It's about Thinking.</h2>
            <p className="md:w-4/5 mb-8 text-sm md:text-base">I am a graduate of a vocational school majoring in software engineering who has a great interest in programming.</p>
            <a href="https://google.com" className="px-6 py-3 bg-blue-600 text-white rounded transition hover:bg-blue-700">Download CV</a>
        </div>
    )
}

export default HeroContent;