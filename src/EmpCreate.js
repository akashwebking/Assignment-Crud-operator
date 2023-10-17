import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
    const productList=["select","Vegetables", "Fruits & Nuts", "Dairy & creams", "Packages Food" , "Staples"]

    const[id,idchange]=useState("");
    const[productname,setProtuctName]=useState("");
    const[price,setPrice]=useState("");
    const[oldPrice,setOldPrice]=useState("");
    const[catogory,setCatagory]=useState("");
    const[description,setDescription]=useState("");
    
    // const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={productname,price,oldPrice,catogory,description};
      

      fetch("http://localhost:8000/employee",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Product Name</label>
                                            <input required value={productname} onChange={e=>setProtuctName(e.target.value)} className="form-control"></input>
                                
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input value={price} onChange={e=>setPrice(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Old Price</label>
                                            <input value={oldPrice} onChange={e=>setOldPrice(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Catagorie Type</label><br />
                                            {/* <input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input> */}
                                            <select onChange={e=>setCatagory(e.target.value)}  name="product">
                                                
                                                {productList.map((list,intex)=>(
                                                    <option key={intex} value={list}>{list}</option>
                                                ))}

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Descriptions</label>
                                            <input value={description} onChange={e=>setDescription(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">Is Active</label>
                                            
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;