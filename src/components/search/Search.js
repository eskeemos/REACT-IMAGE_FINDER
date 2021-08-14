import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../results/ImageResults.js';

export default class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '22551781-c588a7e12b0c22b3457291643',
        images: []
    }

    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({[e.target.name]: val}, () => {
            if(val === ''){
                this.setState({images: []})
            }else{
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({images:res.data.hits}))
                .catch(err => console.log(err))
            }
        })
    }

    onAmountChange = (e, idx, val) => {
        this.setState({amount : val})
    }

    render() {
        return (
            <div>
                <TextField 
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search For Images"
                    fullWidth={true}
                />
                <br />
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText="3" />
                    <MenuItem value={10} primaryText="9" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={50} primaryText="60" />
                </SelectField>
                <br />
                {this.state.images.length > 0 ? <ImageResults images={this.state.images} /> : null}
            </div>
        )
    }
}
