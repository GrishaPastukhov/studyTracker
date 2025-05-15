import './AppHeader.scss'

const AppHeader = () => {
    return(
        <div className='AppHeader'>
        <h1 className="AppHeader__h1">
            studytracker
        </h1>
        <button className='burgerMenu'>
            <span className='burgerMenu__stripe'></span>
            <span className='burgerMenu__stripe'></span>
            <span className='burgerMenu__stripe'></span>
        </button>
        </div>
    )
}

export default AppHeader;