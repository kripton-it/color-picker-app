import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: ""
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange = ({ target }) => {
    this.setState({
      newPaletteName: target.value
    });
  };

  handleSubmit = () => {
    this.props.handleSubmit(this.state.newPaletteName);
  };

  render() {
    const { newPaletteName } = this.state;
    const { handleClose, open } = this.props;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={this.handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Please, enter a name for your new palette. Make sure it's unique.
            </DialogContentText>
            <TextValidator
              value={newPaletteName}
              label="Palette Name"
              id="input"
              fullWidth
              margin="normal"
              onChange={this.handleChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Palette name is required",
                "Palette name must be unique"
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default PaletteMetaForm;
