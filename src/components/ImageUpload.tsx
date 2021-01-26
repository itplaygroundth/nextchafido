import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { makeStyles, Theme, createStyles,createMuiTheme,ThemeProvider } from "@material-ui/core/styles";
import { BorderAll } from "@material-ui/icons";
import Grid from "@material-ui/core"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { red,green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton'
 
const useStyle = makeStyles((theme: Theme) =>
createStyles({
  // root: {
  //   margin: theme.spacing(5),
  //   padding: theme.spacing(2),
  //   fontSize: 14,
  // },
   
  thumbutton: {
      position: "relative",
      height:80,
      //marginTop: "1.3rem",
      width: "7rem",
      border: "2px dashed #ccc",
      marginLeft: "0.4rem",
     // marginBottom: "1rem",
     fontSize:40,
     fontWeight:'bold'

      
    },
    uploadbtnwrapper: {
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
      },
    custombtn: {
        color: "darkgray",
        width: "100%",
        // height: "5rem",
        fontSize: "45px",
        border: "none",
        background: "none",
        cursor:"pointer",
        overflow:" hidden",
        outline:"none",

    },
    btnwrap:{
      width: "40%",
      height: "50%",
      padding: "2px"
    },
    gallery: {
      padding: "2px",
      float: "left",
      width: "100%"
    },
     preview: {
      display: 'flex',
      flexDirection:'column',
      height:50
     },
    itemtop:{
      alignSelf:'flex-start'
    },
    itembot:{
      position: 'fixed',
      width: 100,
      top: 0,
      //backgroundColor: 'red',
      color: 'white',
      //textAlign: 'center'
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      // padding: "5px",
      // minWidth:200,
      // width: "100%",
      //  height: 100,
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    delete:{

      //background:"red",
      color: "white",
      '&:hover': {
        backgroundColor: "white",
        color: 'red',
    },
    '&:disabled': {
        //backgroundColor: "#A7A9AC",
    },
    } 

})
);

export function ImageUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
 
const classes = useStyle();

  const onChange = (
    //@ts-ignore
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
     
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList, 
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className={classes.gallery}>
          <div className={classes.uploadbtnwrapper}>
         
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight={80} spacing={1}>
                 {imageList.map((image, index) => (
                   <div key={index} className={classes.preview}>
                   <div className={classes.itemtop}>
                  <img src={image.dataURL} alt="" width="100" />
                   </div>
                    <div className={classes.itembot}>
                    <IconButton aria-label="delete" className={classes.delete} onClick={() => onImageRemove(index)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div>
                 </div>
                 ))}
            
            </GridList>
            <div>
           <button className={classes.thumbutton}
                   onClick={onImageUpload}
             {...dragProps}
           >
             &#43;
           </button>
           &nbsp;
           </div>
            </div>
          </div>
          
           </div>
        )}
      </ImageUploading>
    
  );
}
