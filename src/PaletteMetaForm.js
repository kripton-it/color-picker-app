import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "name",
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

  showEmojiPicker = () => {
    this.setState({
      stage: "emoji"
    });
  };

  handleSubmit = ({ native }) => {
    const palette = {
      paletteName: this.state.newPaletteName,
      emoji: native
    };
    this.props.handleSubmit(palette);
    this.setState({
      stage: ""
    });
  };

  render() {
    const { newPaletteName, stage } = this.state;
    const { handleClose } = this.props;

    return (
      <>
        <Dialog
          open={stage === "emoji"}
          onClose={handleClose}
          aria-labelledby="emoji-dialog-title"
        >
          <DialogTitle id="emoji-dialog-title">
            Choose a Palette Emoji
          </DialogTitle>
          <Picker onSelect={this.handleSubmit} title="Pick an Emoji" />
        </Dialog>
        <Dialog
          open={stage === "name"}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please, enter a name for your new palette. Make sure it's
                unique.
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
      </>
    );
  }
}

export default PaletteMetaForm;
