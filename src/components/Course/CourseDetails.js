import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCourseDetails } from "../../actions/courseAction";
import Bar from "../Header/Bar";
import { makeStyles } from "@material-ui/styles";
import Loader from "../Loader/Loader";

const useStyles = makeStyles({
  root: {
    marginTop: "-10px",
  },
  hr: {
    color: "#888585",
  },
  box: {
    display: "flex",
    marginTop: "65px",
    marginLeft: "20px",
  },
  data: {
    display: "flex",
    marginTop: "20px",
    marginLeft: "-150px",
  },
  card: {
    width: "10%",
  },
  title: {
    textTransform: "uppercase",
  },
  boxtitle: {
    background: "#3F51B5",
    padding: "13px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "-40px",
    marginLeft: "-10px",
  },
  cardcontent: {
    marginTop: "20px",
    margin: "1%",
    marginLeft: "10px",
  },
  cardcontentbody: {
    marginBottom: "20px",
    margin: "1%",
  },
  hr: {
    width: "850px",
    marginLeft: "10px",
  },
  boxcontainer: {
    marginTop: "10px",
    background: "#3F51B5",
    padding: "13px",
    fontWeight: "bold",
    color: "#fff",
    marginLeft: "5px",
  },
  leftcardroot: {
    minWidth: "390px",
  },
  leftcardcontent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    color: "#4e4d4d",
  },
  leftcardcontentbody: {
    textTransform: "uppercase",
    fontSize: "14px",
    display: "flex",
    flexWrap: "wrap",
    width: "340px",
    marginTop: "40px",
    color: "#4e4d4d",
  },
  flexwrap: {
    display: "flex",
    flexWrap: "wrap",
  },
  cardcontentlabel: {
    fontWeight: "bold",
    color: "#4e4d4d",
    textTransform: "uppercase",
  },
  cardcontentspan: {
    textTransform: "uppercase",
  },
});

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { course, loading, error } = useSelector(
    (state) => state.courseDetails
  );

  useEffect(() => {
    dispatch(getCourseDetails(id));
  }, [dispatch, id, error]);

  const classes = useStyles();

  return (
    <>
      <Bar />
      {loading ? (
        <Loader />
      ) : (
        <Grid container className={classes.root}>
          <Grid md={5}>
            <Box className={classes.box}>
              <Card className={classes.leftcardroot} variant="outlined">
                <CardContent>
                  <Typography variant="h3" class={classes.leftcardcontent}>
                    {course.university}
                  </Typography>
                  <Box className={classes.flexwrap}>
                    <Typography
                      variant="body2"
                      class={classes.leftcardcontentbody}
                    >
                      Campus : {course.campus}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
          <Grid md={7}>
            <Box className={classes.data}>
              <Card className={classes.card} elevation={0}>
                <CardContent className={classes.cardcontent}>
                  <Typography className={classes.title}>
                    <Box className={classes.boxtitle}>{course.coursename}</Box>
                  </Typography>
                </CardContent>
                <CardContent>
                  <Box container>
                    <Typography variant="body2" className={classes.cardcontent}>
                      <label className={classes.cardcontentlabel}>
                        Duration
                      </label>{" "}
                      :{" "}
                      <span className={classes.cardcontentspan}>
                        {course.duration}
                      </span>
                    </Typography>
                    <hr className={classes.hr} />
                  </Box>
                  <Box>
                    <Typography variant="body2" className={classes.cardcontent}>
                      <label className={classes.cardcontentlabel}>
                        Application Status
                      </label>{" "}
                      :{" "}
                      <span className={classes.cardcontentspan}>
                        {/* {applicationdeadline} */}
                        {course.applicationstatus}
                      </span>
                    </Typography>
                    <hr className={classes.hr} />
                  </Box>
                  <Box>
                    <Typography variant="body2" className={classes.cardcontent}>
                      <label className={classes.cardcontentlabel}>
                        Application Fees
                      </label>{" "}
                      :{" "}
                      <span className={classes.cardcontentspan}>
                        {/* {applicationfee} */}
                        {course.applicationfee}
                      </span>
                    </Typography>
                    <hr className={classes.hr} />
                  </Box>
                  <Box>
                    <Typography variant="body2" className={classes.cardcontent}>
                      <label className={classes.cardcontentlabel}>
                        Yearly Tution Fees
                      </label>{" "}
                      :{" "}
                      <span className={classes.cardcontentspan}>
                        {course.totalfee}
                      </span>
                    </Typography>
                    <hr className={classes.hr} />
                  </Box>
                  <Typography className={classes.title}>
                    <Box className={classes.boxcontainer}>Requirements</Box>
                  </Typography>
                  <Box>
                    <Typography variant="body2" className={classes.cardcontent}>
                      <label className={classes.cardcontentlabel}>
                        Entry Requirements
                      </label>{" "}
                      :{" "}
                      <span className={classes.cardcontentspan}>
                        {/* {entryrequirement} */}
                        {course.entryrequirement}
                      </span>
                    </Typography>
                    <hr className={classes.hr} />
                  </Box>
                  <Typography className={classes.title}>
                    <Box className={classes.boxcontainer}>Scholarship</Box>
                  </Typography>
                  <Box>
                    <Typography variant="body2" className={classes.cardcontent}>
                      <label className={classes.cardcontentlabel}>
                        Scholarship Status
                      </label>{" "}
                      :{" "}
                      <span className={classes.cardcontentspan}>
                        {/* {scholarshipavailable} */}
                        {course.scholarshipstatus}
                      </span>
                    </Typography>
                    <hr className={classes.hr} />
                  </Box>
                  <Box>
                    <Typography variant="body2" className={classes.cardcontent}>
                      <label className={classes.cardcontentlabel}>
                        Scholarship Details
                      </label>{" "}
                      :{" "}
                      <span className={classes.cardcontentspan}>
                        {/* {scholarshipdetails} */}
                        {course.scholarship}
                      </span>
                    </Typography>
                    <hr className={classes.hr} />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CourseDetails;
