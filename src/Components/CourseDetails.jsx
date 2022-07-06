import React from "react";

const Courses = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-md-6" key={props.dotnet.courseid}>
                    <div className="card" style={{ borderRadius: 30, borderStyle: 'dashed', borderColor: 'azure' }}>
                        <div className="card-body" >
                            <img src={props.dotnet.courseimg} className="img" alt='' style={{ mixBlendMode: 'normal' }} />
                            <center>
                                <h1 className="card-title" style={{ color: 'azure' }}>COURSENAME: {props.dotnet.coursename}</h1>
                                <h3 className="card-title" style={{ color: 'azure' }}>DURATION: {props.dotnet.courseduration}</h3>
                                <h4 className="card-title" style={{ color: 'azure' }}>NO OF PARTICIPANTS: {props.dotnet.no_of_participants}</h4>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" key={props.java.courseid}>
                    <div className="card" style={{ borderRadius: 30, borderStyle: 'dashed', borderColor: 'azure' }}>
                        <div className="card-body" >
                            <img src={props.java.courseimg} className="img" alt='' style={{ mixBlendMode: 'normal' }} />
                            <center>
                                <h1 className="card-title" style={{ color: 'azure' }}>COURSENAME: {props.java.coursename}</h1>
                                <h3 className="card-title" style={{ color: 'azure' }}>DURATION: {props.java.courseduration}</h3>
                                <h4 className="card-title" style={{ color: 'azure' }}>NO OF PARTICIPANTS: {props.java.no_of_participants}</h4>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <br></br><br></br>
            <div className="row">
                <div className="col-md-6" key={props.php.courseid}>
                    <div className="card" style={{ borderRadius: 30, borderStyle: 'dashed', borderColor: 'azure' }}>
                        <div className="card-body" >
                            <img src={props.php.courseimg} className="img" alt='' style={{ mixBlendMode: 'normal' }} />
                            <center>
                                <h1 className="card-title" style={{ color: 'azure' }}>COURSENAME: {props.php.coursename}</h1>
                                <h3 className="card-title" style={{ color: 'azure' }}>DURATION: {props.php.courseduration}</h3>
                                <h4 className="card-title" style={{ color: 'azure' }}>NO OF PARTICIPANTS: {props.php.no_of_participants}</h4>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" key={props.python.courseid}>
                    <div className="card" style={{ borderRadius: 30, borderStyle: 'dashed', borderColor: 'azure' }}>
                        <div className="card-body" >
                            <img src={props.python.courseimg} className="img" alt='' style={{ mixBlendMode: 'normal' }} />
                            <center>
                                <h1 className="card-title" style={{ color: 'azure' }}>COURSENAME: {props.python.coursename}</h1>
                                <h3 className="card-title" style={{ color: 'azure' }}>DURATION: {props.python.courseduration}</h3>
                                <h4 className="card-title" style={{ color: 'azure' }}>NO OF PARTICIPANTS: {props.python.no_of_participants}</h4>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses;