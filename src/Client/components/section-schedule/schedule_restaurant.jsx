import "./schedule_restaurant.css";
import person from "../../../img/personas.jpg"
const ScheduleRestaurant = () => {
  return (
    <>
      <section className="section-schedule">
        <div className="section-schedule__container">
          <div className="img__container">
            <img src={person}></img>
          </div>
          <div className="schedule__container">
            Horario
            <br />
            Martes a domingo: 12 pm a 9:00 pm
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleRestaurant;
