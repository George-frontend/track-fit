import { Dumbbell, MoveRight, Activity, Flame, TrendingUp } from "lucide-react";

import './landing.css';

const Landing = () => {
  return (

    <div className="landing">

        <nav>
            <span className="logo"><Dumbbell size={24} /> TrackFIt</span>

            <ul className="nav-links">
                <li><button className="primary-btn">Login</button></li>
                <li><button className="secondary-btn">Get Started</button></li>
            </ul>
        </nav>

        <main>

            <section className="hero">
                
                <h1>Track every rep. Reach every goal.</h1>

                <p>
                    The minimalist workout tracker built for athletes who care about results. 
                    Log sessions, track weight, build programs — all in one place.
                </p>

                <div className="actions">
                    <button className="secondary-btn">Get Started <MoveRight size={24} /></button>
                    <button className="primary-btn">Login to your account</button>
                </div>
            </section>

            <section className="features">
                
                <h2>Everything you need to train smarter</h2>

                <p>Built around the habits that actually produce results.</p>

                <div className="features-grid">
                    <article>
                        <div className="icon-wrapper">
                            <Activity size={24} />
                        </div>

                        <h3>Workout Tracking</h3>

                        <p>Log every set, rep, and weight. Detailed session history with performance trends over time.</p>
                    </article>
            
                    <article>
                        <div className="icon-wrapper">
                            <Flame size={24} />
                        </div>

                        <h3>Streak System</h3>

                        <p>Build consistency with daily streaks. Stay on track with smart progress indicators.</p>
                    </article>
        
                    <article>
                        <div className="icon-wrapper">
                            <TrendingUp size={24} />
                        </div>
                        
                        <h3>Weight Progress</h3>

                        <p>Monitor your body composition with visual charts, trend lines, and weekly averages.</p>
                    </article>

                    <article>
                        <div className="icon-wrapper">
                            <Dumbbell size={24} />
                        </div>
                        
                        <h3>Custom Programs</h3>

                        <p>Build fully custom training programs with days, exercises, and precise loading schemes.</p>
                    </article>
                </div>
            </section>

            <section className="cta">
                
                <h2>Start tracking today.</h2>

                <p>Join thousands of athletes already using TrackFit to reach their fitness goals.</p>

                <button className="primary-btn"> Create Free Account <MoveRight size={24} /></button>
            </section>
        </main>
        
        <footer>© 2025 TrackFit. All rights reserved.</footer>
    </div>
  )
}

export default Landing