import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ProgressIndicator from "../utils/ProgressIndicator";
import { Button } from "@mui/material";

import { ColGrid, Col, Card, Text, Metric } from "@tremor/react";
import Map from "../map/Map";
import LocationMap from "../map/LocationMap";
import { useLocation } from "react-router-dom";

function ItemForm({ formInputs, user = "customer" }) {
  const location = useLocation();
  let state = {};
  if (location?.state) {
    state = location.state;
  }

  const customerInitialValues = formInputs.customerInputs.map(({ name }) => {
    return { [name]: "" };
  });
  const v = Object.assign({}, ...customerInitialValues);
  const [values, setValues] = React.useState({
    ...v,
    confirm_password: "",
    // showPassword: false,
  });

  const [userFormData, setUserFormData] = React.useState(null);

  console.log(values);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    setValues({ ...values, ...state?.row });
    switch (user) {
      case "customer":
        setUserFormData(formInputs.customInputs);
        break;
      case "mover":
        setUserFormData(formInputs.moverInputs);
        break;
      case "admin":
        setUserFormData(formInputs.adminInputs);
        break;
      default:
        break;
    }
  }, []);

  console.log(formInputs);

  return (
    <ColGrid
      numCols={1}
      numColsSm={2}
      numColsLg={3}
      gapX="gap-x-2"
      gapY="gap-y-2"
    >
      <Col
        numColSpan={1}
        numColSpanLg={2}
      >
        <Card>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <>
              {!values ? (
                <ProgressIndicator />
              ) : (
                Object.keys(values).map((data) =>
                  data.name === "password" ? (
                    <div key={data.name}>
                      <FormControl
                        sx={{ m: 1, width: "25ch" }}
                        variant="standard"
                      >
                        <InputLabel htmlFor="standard-adornment-password">
                          {data}
                        </InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={values.showPassword ? "text" : "password"}
                          value={values.data}
                          onChange={handleChange(`${data}`)}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {values.showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                  ) : (
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="filled"
                    >
                      <InputLabel htmlFor="standard">{data.label}</InputLabel>
                      <Input
                        id=""
                        value={values.data}
                        label="Standard"
                        onChange={handleChange(`${data}`)}
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                          "aria-label": { data },
                        }}
                      />
                      <FormHelperText id="outlined-weight-helper-text">
                        {data}
                      </FormHelperText>
                    </FormControl>
                  )
                )
              )}
            </>
            <Button
              sx={{ width: "100%" }}
              variant="outlined"
              color="success"
            >
              Update
            </Button>
          </Box>
        </Card>
      </Col>
      <Card>
        <LocationMap
          height="250px"
          width="300px"
        />
      </Card>
    </ColGrid>
  );
}

export default ItemForm;
