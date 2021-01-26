import react,{useContext} from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {useAuth} from './../src/lib/userContext'
import Router, {useRouter} from 'next/router'
import { useForm } from 'react-hook-form';
const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(3),
    },
  }));
  interface formData {
    username: string;
    password: string;
  }
const login = ()=>{
    const router = useRouter()
    const userContext = useAuth()
    const { handleSubmit, register } = useForm<formData>();
    
        const classes = useStyles();
        const onSubmit = handleSubmit((data) => {
            //console.log(data);
            const udata = new FormData();
            udata.append("username", data.username);
            udata.append("password", data.password);
            //@ts-ignore
            userContext.login(udata).then(result=>{
              //  console.log(result)
              //@ts-ignore
                userContext.isAuthenticated = true
                router.push('/')
        
            })
          });
        return (
          <Container className={classes.container} maxWidth="xs">
            <form onSubmit={onSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Username" name="username" size="small" variant="outlined" inputRef={register} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        size="small"
                        type="password"
                        variant="outlined"
                        inputRef={register}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button color="secondary" fullWidth type="submit" variant="contained">
                    Log in
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        );
}
export default login