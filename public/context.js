
const Route         = ReactRouterDOM.Route;
const Link          = ReactRouterDOM.Link;
const HashRouter    = ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const UserContext   = React.createContext(null);

// var db_url = process.env.ORMONGO_RS_URL;

const firebaseConfig = {
    apiKey: "AIzaSyAsghpyEY97y4_6_u-nbjR9tyeo7A2U-pU",

    authDomain: "badbank-8cf52.firebaseapp.com",
  
    // databaseURL: db_url,
  
    projectId: "badbank-8cf52",
  
    storageBucket: "badbank-8cf52.appspot.com",
  
    messagingSenderId: "359944407222",
  
    appId: "1:359944407222:web:da82edcb052711e0a83e17"
  
};

firebase.initializeApp(firebaseConfig);

function Card(props){
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3 ' + bg + txt;
    }

    return (
        <div className={classes()} style={{maxWidth: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id="createStatus">{props.status}</div>)}
            </div>
        </div>
    );
}

