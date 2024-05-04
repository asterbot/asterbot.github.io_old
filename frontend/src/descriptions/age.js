const Age = () => {
    return ( 
        <div className="project-description">
            This project implements a game engine designed for ASCII (and unicode) characters.
            <br />
            It uses the <code>Ncurses</code> library (which was written for C) and is written with <code>C++</code> following OOP principles.
            <br />
            I implemented two classic games with the engine, <a href="https://en.wikipedia.org/wiki/Tetris">Tetris</a> and <a href="https://en.wikipedia.org/wiki/Donkey_kong">Donkey Kong</a> to demonstrate its versitality.
            <br /><br />
            The engine follows the <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">MVC architecture</a> allowing the client programmer to:
            <br />
            <ul className="normal-list">
                <li>Define entities <br/></li> 
                <li>Define actions and key-binds</li>
                <li>Define interactions between entities</li>
            </ul>
            <br />
            The engine has flexibility, allowing the client to encode the interaction/movement logic of the entities.
            <br />
            I utilized various OOP design patterns, including <a href="https://en.wikipedia.org/wiki/Observer_pattern">Observer Pattern</a>, <a href="https://en.wikipedia.org/wiki/Iterator_pattern">Iterator Pattern</a> and features of C++ including <a href="https://en.wikipedia.org/wiki/Non-virtual_interface_pattern">NVI idiom</a> and <a href="https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization">RAII</a>.
            <br />
            <br />
            I designed this project for an enriched OOP course, but I cannot share the source code abiding to <a href="https://uwaterloo.ca/secretariat/policies-procedures-guidelines/policy-71">Policy 71</a>.     


        
        </div> 
    );
}
 
export default Age;