

const Information = () => {
    return (
        <div id="information" className="information-wrapper bg-information">
              <div className="information-headline">
                <h1 className="informationh1 information-border">Allgemeine Informationen</h1>

                <ul className="cards">
                        
                    <div className="card">
                    <li >
                    <h3 className="informationh3">Ort</h3>
                    <p className="para-information">Die Kurse werden im Winter in der Sporthalle Lissfeld stattfinden. 
                        Diese Skate-Halle befindet sich in Linz in der Nähe vom Bindermichel Tunnel.</p>
                        <button type = "button" className = "btn btn-white informationBtn">Mehr Information</button>
                    </li>
                    </div>
                    <div className="card">
                    <li >
                    <h3 className="informationh3">Ablauf</h3>
                    <div className="para-information">
                    <p className="para-information">Der Kurs wird in 3 Teile aufgebaut:</p>
                    <ul>
                        <li>1. Aufwärmen, kennenlernen</li>
                        <li>2. Alte Tricks üben</li>
                        <li>3. Neue Tricks lernen</li>
                    </ul>
                    <p>Mit dieser Methode kann eine steile Lernkurve erreicht werden.</p>
                    </div>
                    </li>
                    </div>
                    <div className="card">
                    <li >
                    <h3 className="informationh3">Anmeldung</h3>
                    <p className="para-information">Weiter unten auf der Website können Sie sich oder Ihr Kind anmelden. 
                    ​   Nach einer erfolgreichen Anmeldung werden Sie eine Email mit den Kursdaten erhalten.    
                    </p>
                    <button type = "button" className = "btn btn-white informationBtn">Anmelden</button>
                    </li>
                    </div>

                </ul>
            </div>
        
            </div>
        
        
    )
}

export default Information;