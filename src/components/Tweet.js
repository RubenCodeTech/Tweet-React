import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

//Tweet(props) props tiene todas las propiedades que se le pasen al componente. Ventaja: no hay que modificar el parametro que se le pasa a esta funcion nunca, pero a la hora de acceder a las propiedades es mas largo. Las rutas de acceso son mas largas.

//Tweet({ tweet }) cada propiedad debe ponerse individualmente para poder usarse. Ventaja: propiedades definidas por separado, por lo que el editor de codigo autocompleta las props cuando usas el componente en otro sitio (ctrl + spacebar). Las rutas de acceso son mas cortas. 
function Tweet({tweet}) {

  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user={tweet.user} />
          <Timestamp timestamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
