import React, {useState} from 'react'
import './Contract.css';
const Contract = () => {
    const [state, setState] = useState({
        bf: false,
        gf: false,
      });
    
      const handleChange = (event) => {
        const { name, checked } = event.target;
        setState(prevState => ({
          ...prevState,
          [name]: checked,
        }));
      };
    return (
        <div className="Contract-container">
          <div className="contract">
            <h1>Amorous Accord of Never Ending Partnership and Mutual Merriment</h1>
            <p>This Accord, entered into with both solemn intent and irrepressible glee, is made on this day, 3/9/2024, marked by the 3 month anniversary by and between Sony Singh, hereafter referred to as "The Boyfriend," and Marelle Desbin, hereafter referred to as "The Girlfriend." Collectively, they shall be known under the loving and legally non-binding title "The Power Couple"</p>
            <ol>
                <li><strong>Declaration of Infinite Adoration:</strong> The Parties vow to pepper their partnership with plentiful love, adoration, and satisication</li>
                <li><strong>Eternal Entertainment Clause:</strong> The Parties shall not subject each other to dreadfully dull affairs and shall strive to inject a dose of mirth into mundane moments, understanding that life is too short for subpar entertainment. Ontop both parties must be 'satisfied' equally under the sheets, at least three times a week.</li>
                <li><strong>Nourishment Novelties:</strong> Both Parties shall endeavor to surprise one another with culinary delights, otherwise known as date-nights, as well as avoiding Ketchup in all meals.</li>
                <li><strong>Financial Freedom:</strong> The Parties shall engage in equal finacial distribution, paying for meals determined by the flip of a coin, and alternating bus/plane tickets for the month. On top, for the duration of this contract, Sony is set to a gift limit of $150 USD where as Marelle is set to a gift limit of $100 Canadian</li>
                <li><strong>Festivity Framework:</strong> The Parties shall celebrate not only the traditional milestones but also invent their own anniversaries, such as the anniversary of the first time they laughed so hard they cried or the anniversary of their monthly time together.</li>
                <li><strong>Illuminating Intimacy:</strong> Both parties shall continue their physical goals that have deemed for their oneselves and upon signing, Marelle agrees to accompany Sony to the gym for the rest of the term of this 1 year legal bind. Both parties mutually will agree to see each other at least twice a month for the remaining of this current legal bind. [Exception listed below]</li>
                <li><strong>Perpetual Patience Protocol:</strong> The Parties agree to exhibit an unearthly level of patience when the other is explaining something they are passionate about, even if it involves topics as Taylor Swift, Yugioh, League of Legends, or the history of the French Revolution</li>
                <li><strong>Divine December:</strong> There shall be no cap on the distribution of gifts and ability to see one another on the month of December. Each party may shower each other with love, affection and suprise visits.</li>
                <li><strong>Annual Audit:</strong> On the anniversary of this Accord, the Parties shall conduct a lighthearted review of their relationship, celebrating successes with a grand date, laughing over missteps, and setting whimsical objectives for the year ahead.</li>
                <li><strong>Amendment Avenue:</strong> This Accord is a living document, much like the love it represents, and as such, may be amended with mutual agreement.</li>
            </ol>
            <p>IN WITNESS WHEREOF, the Parties have executed this Accord, binding themselves to its terms, for better, for funnier, until a lack of love do they part.</p>
            <div className="signatures">
              <p>{state.bf === false ? <div>[Signature of Boyfriend ________________________] <input name="bf"
                    type="checkbox"
                    checked={state.bf}
                    onChange={handleChange}
                />[Checking this box is equivalent to you signing this binding contract]</div>: 'Sony has offically signed the binding contract for 1 year'}</p>
              <p>{state.gf === false ?<div>[Signature of Girlfriend ________________________] 
                <input name="gf"
                    type="checkbox"
                    checked={state.gf}
                    onChange={handleChange}
                />[Checking this box is equivalent to you signing this binding contract]</div>: 'Marelle has offically signed the binding contract for 1 year'}</p>
            </div>
          </div>
        </div>
      );
}

export default Contract