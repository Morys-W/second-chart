import placeholder from '../Assets/placeholder.png';
import '../App.css';

const Insights = () => {
    return (
        <div className="insights-container">
            <div className="insights-left">
                <h1 id="insights-header-first">Insights Title</h1>
                <h1 id="insights-header-second">Blurb?</h1>
                <button className="insights-button">View All</button>
            </div>
            <div className="insights-right">
                <img src={placeholder} alt="placeholder"></img>
            </div>
        </div>
    );
}

export default Insights;