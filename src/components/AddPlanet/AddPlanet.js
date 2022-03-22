import React, {useState, useEffect, useCallback} from 'react';
import {
    Button,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";

const initForm = {
    fields: {
        name: "",
        rotation_period: 0,
        orbital_period: 0,
        diameter: 0,
        climate: "",
        gravity: "",
        terrain: "",
        surface_water: 0
    },
    errors: {
        name: "",
        rotation_period: "",
        orbital_period: "",
        diameter: "",
        climate: "",
        gravity: "",
        terrain: "",
        surface_water: ""
    }
};

const AddPlanet = ({ isOpen, setIsOpen, onSuccess }) => {
    const [formData, setFormData] = useState(initForm);

    const toggle = useCallback(() => {
        setFormData(initForm);
        setIsOpen(!isOpen);
    }, [isOpen, setIsOpen, setFormData]);

    const handleInputChange = useCallback((e, field) => {
        let value = e.target.value;

        if(value && value.trim() !== '') {
            setFormData(prev =>  {
                const state = { fields: {...prev.fields}, errors: {...prev.errors}};
                state.fields[field] = e.target.value;
                state.errors[field] = '';
                return state
            });
        }
    }, [setFormData]);

    const handleFormSubmit = useCallback(() => {
        const data = { fields: {...formData.fields}, errors: {...formData.errors}};
        let errors = false;
        Object.keys(data.fields).forEach(key => {
            if (!data.fields[key]) {
                data.errors[key] = key.split('_').join(" ") + " is required!"
                errors = true;
            }
        });

        setFormData(data);
        if(!errors) {
            setIsOpen(false);
            onSuccess();
        }
    }, [formData, setFormData, setIsOpen]);

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Add Planet
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="name">
                            Name
                        </Label>
                        <Input
                            type='text'
                            name='name'
                            value={formData.fields.name}
                            invalid={!!formData.errors.name}
                            valid={!!formData.fields.name}
                            onChange={ e => handleInputChange(e, 'name')}
                        />
                        {formData.errors.name && (<FormFeedback>{formData.errors.name}</FormFeedback>)}
                    </FormGroup>
                    <FormGroup>
                        <Label for="rotation_period">
                            Rotation Period
                        </Label>
                        <Input
                            type="number"
                            name='rotation_period'
                            value={formData.fields.rotation_period}
                            invalid={!!formData.errors.rotation_period}
                            valid={!!formData.fields.rotation_period}
                            onChange={ e => handleInputChange(e, 'rotation_period')}
                        />
                        {formData.errors.rotation_period && (<FormFeedback>{formData.errors.rotation_period}</FormFeedback>)}
                    </FormGroup>
                    <FormGroup>
                        <Label for="orbital_period">
                            Orbital Period
                        </Label>
                        <Input
                            type="number"
                            name='orbital_period'
                            value={formData.fields.orbital_period}
                            invalid={!!formData.errors.orbital_period}
                            valid={!!formData.fields.orbital_period}
                            onChange={ e => handleInputChange(e, 'orbital_period')}
                        />
                        {formData.errors.orbital_period && (<FormFeedback>{formData.errors.orbital_period}</FormFeedback>)}
                    </FormGroup>
                    <FormGroup>
                        <Label for="diameter">
                            Diameter
                        </Label>
                        <Input
                            type="number"
                            name='diameter'
                            value={formData.fields.diameter}
                            invalid={!!formData.errors.diameter}
                            valid={!!formData.fields.diameter}
                            onChange={ e => handleInputChange(e, 'diameter')}
                        />
                        {formData.errors.diameter && (<FormFeedback>{formData.errors.diameter}</FormFeedback>)}
                    </FormGroup>
                    <FormGroup>
                        <Label for="climate">
                            Climate
                        </Label>
                        <Input
                            type="text"
                            name='climate'
                            value={formData.fields.climate}
                            invalid={!!formData.errors.climate}
                            valid={!!formData.fields.climate}
                            onChange={ e => handleInputChange(e, 'climate')}
                        />
                        {formData.errors.climate && (<FormFeedback>{formData.errors.climate}</FormFeedback>)}
                    </FormGroup>
                    <FormGroup>
                        <Label for="gravity">
                            Gravity
                        </Label>
                        <Input
                            type="text"
                            name='gravity'
                            value={formData.fields.gravity}
                            invalid={!!formData.errors.gravity}
                            valid={!!formData.fields.gravity}
                            onChange={ e => handleInputChange(e, 'gravity')}
                        />
                        {formData.errors.gravity && (<FormFeedback>{formData.errors.gravity}</FormFeedback>)}
                    </FormGroup>
                    <FormGroup>
                        <Label for="terrain">
                            Terrain
                        </Label>
                        <Input
                            type="select"
                            name='terrain'
                            value={formData.fields.terrain}
                            invalid={!!formData.errors.terrain}
                            valid={!!formData.fields.terrain}
                            onChange={ e => handleInputChange(e, 'terrain')}
                        >
                            <option></option>
                            <option>desert</option>
                            <option>grasslands</option>
                            <option>mountains</option>
                            <option>jungle</option>
                        </Input>
                        {formData.errors.terrain && (<FormFeedback>{formData.errors.terrain}</FormFeedback>)}
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Surface Water
                        </Label>
                        <Input
                            type="number"
                            name='surface_water'
                            value={formData.fields.surface_water}
                            invalid={!!formData.errors.surface_water}
                            valid={!!formData.fields.surface_water}
                            onChange={ e => handleInputChange(e, 'surface_water')}
                        />
                        {formData.errors.surface_water && (<FormFeedback>{formData.errors.surface_water}</FormFeedback>)}
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={handleFormSubmit}
                >
                    Save
                </Button>
                {' '}
                <Button onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default AddPlanet;