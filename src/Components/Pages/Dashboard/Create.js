import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom"; 
const Create = () => {
  const [loading, setLoading] = useState(false);
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("required this filed")
      .min(1, "5min")
      .max(10, "max10"),
    body: yup
      .string()
      .required("required this filed")
      .min(5, "5min")
      .max(100, "max10"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const create = async (e) => {
    setLoading(true);
    try {
      let data = await fetch(`http://localhost:3030/posts`, {
        method: "POST",
        body: JSON.stringify({
          title: e.title,
          body: e.body,
          id: parseInt(e.id)
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let res = await data.json();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const handlerEvent = async (data) => { 
    await create(data); 
    reset();
    Swal.fire("Good job!", "Your post is Create correctly!", "success");
  };
  const navigate = useNavigate(); 
  return (
    <>
      <div className="container mx-auto mt-3 ">
        <div className="row">
          <div className="col-6 offset-3 bg-dark p-3 text-white">
            <form action="Post" onSubmit={handleSubmit(handlerEvent)}>
              <div className="d-block mb-2">
                <label htmlFor="ID">ID</label>
                <input
                  type="number"
                  placeholder="ID"
                  className="form-control"
                {...register("id")}
                />
               <p>{errors.id?.message}</p>
              </div>
              <div className="d-block mb-2">
                <label htmlFor="title">title</label>
                <input
                  type="text"
                  placeholder="title"
                  className="form-control"
                  {...register("title")}
                />
                <p className="text-warning">{errors.title?.message}</p>
              </div>
              <div className="d-block mb-2">
                <label htmlFor="body">Body</label>
                <textarea
                  type="text"
                  placeholder="body"
                  className="form-control"
                  style={{ height: "150px", resize: "none" }}
                  {...register("body")}
                ></textarea>
                <p className="text-warning">{errors.body?.message}</p>

                <div className="d-block mb-2">
                  <button
                    className="btn btn-success text-capitalize mt-4"
                    disabled=""
                  >
                    create
                    {loading && (
                      <div className="spinner-border spinner-border-sm"></div>
                    )}
                  </button>
                  <button onClick={() => navigate("/dashboard")} className="btn btn-info mt-4 mx-2 text-capitalize">comeBack</button> 
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
