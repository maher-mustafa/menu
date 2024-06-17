import {Zoom} from "react-awesome-reveal";

const Order = (props) => {
  return (
    <Zoom>
      <div dir="rtl" className="card mb-3" style={{}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.image}
              className="img-fluid rounded-start w-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex justify-content-between mt-2 mb-4">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="text-warning">{props.price}</h6>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};
export default Order;
