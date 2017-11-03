import React, { Component } from 'react';
import './create-company.css'
import { connect } from 'react-redux'
import { addCompanyIndustry } from '../../redux/reducers/main-reducer'

class CreateCompanyIndustry extends Component {
    constructor(){
        super();
        this.state={
            option1: false,
            option2: false,
            option3: false,
            option4: false,
            option5: false,
            option6: false,
            option7: false,
            option8: false,
            option9: false,
            option10: false,
            option11: false,
            option12: false,
            option13: false,
            option14: false,
            option15: false,
            option16: false,
            option17: false,
        }
    }

    changeClass(option){
        this.setState({
            [option]: !this.state[option]
        })
    }

    render() {
        return (
            <div className='create-company-industry-boxsizing'>
                <dl>
                    <dt>B</dt>
                    <dd onClick={() => {this.props.addCompanyIndustry('Business Services') ; this.changeClass('option1')}} className={this.state.option1 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Business Services</dd>
                </dl>
                <dl>
                    <dt>C</dt>
                    <dd onClick={() =>{ this.props.addCompanyIndustry('Consumer Services'); this.changeClass('option2')}} className={this.state.option2 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Consumer Services</dd>
                </dl>
                <dl>
                    <dt>E</dt>
                    <dd onClick={() => {this.props.addCompanyIndustry('Education') ; this.changeClass('option3')}} className={this.state.option3 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Education</dd>

                    <dd onClick={() => {this.props.addCompanyIndustry('Energy and Utilities') ; this.changeClass('option4')}} className={this.state.option4 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Energy and Utilities</dd>
                </dl>
                <dl>
                    <dt>F</dt>
                    <dd onClick={() => {this.props.addCompanyIndustry('Financial Services') ; this.changeClass('option5')}} className={this.state.option5 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Financial Services</dd>
                </dl>
                <dl>
                    <dt>G</dt>
                    <dd onClick={() => {this.props.addCompanyIndustry('Government') ; this.changeClass('option6')}} className={this.state.option6 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Government</dd>
                </dl>
                <dl>
                    <dt>H</dt>
                    <dd onClick={() => {this.props.addCompanyIndustry('Health, Pharmaceuticals, and Biotech') ; this.changeClass('option7')}} className={this.state.option7 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Health, Pharmaceuticals, and Biotech</dd>
                </dl>
                <dl>
                    <dt>M</dt>
                    <dd onClick={() => {this.props.addCompanyIndustry('Manufacturing') ; this.changeClass('option8')}} className={this.state.option8 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Manufacturing</dd>
                    <dd onClick={() => {this.props.addCompanyIndustry('Media and Entertainment') ; this.changeClass('option10')}} className={this.state.option10 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Media and Entertainment</dd>
                </dl>
                <dl>
                    <dt>N</dt>
                    <dd onClick={() => {this.props.addCompanyIndustry('Non Profit') ; this.changeClass('option11')}} className={this.state.option11 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Non Profit</dd>
                </dl>
                <dl>
                    <dt>O</dt>
                    <dd onClick={() => {this.props.addCompanyIndustry('Other') ; this.changeClass('option12')}} className={this.state.option12 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Other</dd>
                </dl>
                <dl>
                    <dt>R</dt>
                    <dd onClick={() => {this.props.addCompanyIndustry('Real Estate and Construction') ; this.changeClass('option13')}} className={this.state.option13 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Real Estate and Construction</dd>
                    <dd onClick={() => {this.props.addCompanyIndustry('Retail') ; this.changeClass('option14')}} className={this.state.option14 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Retail</dd>
                </dl>
                <dl>
                    <dt>S</dt>
                    <dd onClick={() => {this.props.addCompanyIndustry('Software and Internet') ; this.changeClass('option15')}} className={this.state.option15 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Software and Internet</dd>
                </dl>
                <dl>
                    <dt>T</dt>
                    <dd onClick={() => {this.props.addCompanyIndustry('Travel Recreation and Leisure') ; this.changeClass('option16')}} className={this.state.option16 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Travel Recreation and Leisure</dd>
                </dl>
                <dl>
                    <dt>W</dt>
                    <dd onClick={() => {this.props.addCompanyIndustry('Wholesale and Distribution') ; this.changeClass('option17')}} className={this.state.option17 === false ?'create-company-industry-option' : 'create-company-industry-option1'}>Wholesale and Distribution</dd>
                </dl>
{/* 
                

                    

<dl>
                    <dt>Business Services</dt>
                    <dd onClick={() => this.props.addCompanyIndustry('Accounting and Tax Preparation')} className='create-company-industry-option'>Accounting and Tax Preparation</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Advertising, Marketing and PR')} className='create-company-industry-option'>Advertising, Marketing and PR</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Data and Records Management')} className='create-company-industry-option'>Data and Records Management</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Facilities Management and Maintenance')} className='create-company-industry-option'>Facilities Management and Maintenance</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('HR and Recruiting Services')} className='create-company-industry-option'>HR and Recruiting Services</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Legal Services')} className='create-company-industry-option'>Legal Services</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Management Consulting')} className='create-company-industry-option'>Management Consulting</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Payroll Services')} className='create-company-industry-option'>Payroll Services</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Sales Services')} className='create-company-industry-option'>Sales Services</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Security Services')} className='create-company-industry-option'>Security Services</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Audio, Video and Photograph')} className='create-company-industry-option'>Audio, Video and Photography</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Computers, Parts and Repair')} className='create-company-industry-option'>Computers, Parts and Repair</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Consumer Electronics, Parts and Repair')} className='create-company-industry-option'>Consumer Electronics, Parts and Repair</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('IT and Network Services and Support')} className='create-company-industry-option'>IT and Network Services and Support</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Business Services Other')} className='create-company-industry-option'>Business Services Other</dd>
                </dl>
                <dl>
                    <dt>Consumer Services</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Automotive Repair and Maintenance')} className='create-company-industry-option'>Automotive Repair and Maintenance</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Funeral Homes and Services')} className='create-company-industry-option'>Funeral Homes and Services</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Laundry and Dry Cleaning')} className='create-company-industry-option'>Laundry and Dry Cleaning</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Parking Lots and Garage Management')} className='create-company-industry-option'>Parking Lots and Garage Management</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Personal Care')} className='create-company-industry-option'>Personal Care</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Photofinishing Services')} className='create-company-industry-option'>Photofinishing Services</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Consumer Services Other')} className='create-company-industry-option'>Consumer Services Other</dd>
                </dl>
                <dl>
                    <dt>Education</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Colleges and Universities')} className='create-company-industry-option'>Colleges and Universities</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Elementary and Secondary Schools')} className='create-company-industry-option'>Elementary and Secondary Schools</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Libraries, Archives and Museums')} className='create-company-industry-option'>Libraries, Archives and Museums</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Sports, Arts, and Recreation Instruction')} className='create-company-industry-option'>Sports, Arts, and Recreation Instruction</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Technical and Trade Schools')} className='create-company-industry-option'> Technical and Trade Schools</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Test Preparation')} className='create-company-industry-option'>Test Preparation</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Education Other')} className='create-company-industry-option'>Education Other</dd>
                </dl>
                <dl>
                    <dt>Energy and Utilities</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Alternative Energy Sources')} className='create-company-industry-option'>Alternative Energy Sources</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Gas and Electric Utilities')} className='create-company-industry-option'>Gas and Electric Utilities</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Gasoline and Oil Refineries')} className='create-company-industry-option'>Gasoline and Oil Refineries</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Sewage Treatment Facilities')} className='create-company-industry-option'>Sewage Treatment Facilities</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Waste Management and Recycling')} className='create-company-industry-option'>Waste Management and Recycling</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Water Treatment and Utilities')} className='create-company-industry-option'>Water Treatment and Utilities</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Energy and Utilities Other')} className='create-company-industry-option'>Energy and Utilities Other</dd>
                </dl>
                <dl>

                    <dt>Financial Services</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Personal Financial Planning and Private Banking')} className='create-company-industry-option'>Personal Financial Planning and Private Banking</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Financial Services Other')} className='create-company-industry-option'>Financial Services Other</dd>
                </dl>
                <dl>

                    <dt>Government</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('International Bodies and Organizations')} className='create-company-industry-option'>International Bodies and Organizations</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Local Government')} className='create-company-industry-option'>Local Government</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Government Other')} className='create-company-industry-option'>Government Other</dd>
                </dl>
                <dl>
                    <dt>Health, Pharmaceuticals, and Biotech</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Biotechnology')} className='create-company-industry-option'>Biotechnology</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Diagnostic Laboratories')} className='create-company-industry-option'> Diagnostic Laboratories</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Pharmaceuticals')} className='create-company-industry-option'>Pharmaceuticals</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Health, Pharmaceuticals, and Biotech Other')} className='create-company-industry-option'>Health, Pharmaceuticals, and Biotech Other</dd>
                </dl>
                <dl>

                    <dt>Manufacturing</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Alcoholic Beverages')} className='create-company-industry-option'>Alcoholic Beverages</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Automobiles, Boats and Motor Vehicles')} className='create-company-industry-option'>Automobiles, Boats and Motor Vehicles</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Concrete, Glass and Building Materials')} className='create-company-industry-option'>Concrete, Glass and Building Materials</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Farming and Mining Machinery and Equipment')} className='create-company-industry-option'>Farming and Mining Machinery and Equipment</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Food and Dairy Product Manufacturing and Packaging')} className='create-company-industry-option'>Food and Dairy Product Manufacturing and Packaging</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Furniture Manufacturing')} className='create-company-industry-option'>Furniture Manufacturing</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Metals Manufacturing')} className='create-company-industry-option'>Metals Manufacturing</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Nonalcoholic Beverages')} className='create-company-industry-option'>Nonalcoholic Beverages</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Paper and Paper Products')} className='create-company-industry-option'>Paper and Paper Products</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Plastics and Rubber Manufacturing')} className='create-company-industry-option'>Plastics and Rubber Manufacturing</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Textiles, Apparel and Accessories')} className='create-company-industry-option'>Textiles, Apparel and Accessories</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Tools, Hardware and Light Machinery')} className='create-company-industry-option'>Tools, Hardware and Light Machinery</dd>
                </dl>
                <dl>
                    <dt>Media and Entertainment</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Motion Picture and Recording Producers')} className='create-company-industry-option'>Motion Picture and Recording Producers</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Newspapers, Books, and Periodicals')} className='create-company-industry-option'>Newspapers, Books, and Periodicals</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Performing Arts')} className='create-company-industry-option'>Performing Arts</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Radio, Television Broadcasting')} className='create-company-industry-option'>Radio, Television Broadcasting</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Media and Entertainment Other')} className='create-company-industry-option'>Media and Entertainment Other</dd>
                </dl>
                <dl>

                    <dt>Non-profit</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Advocacy Organizations')} className='create-company-industry-option'>Advocacy Organizations</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Charitable Organizations and Foundations')} className='create-company-industry-option'>Charitable Organizations and Foundations</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Professional Associations')} className='create-company-industry-option'>Professional Associations</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Religious Organizations')} className='create-company-industry-option'>Religious Organizations</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Social and Membership Organizations')} className='create-company-industry-option'>Social and Membership Organizations</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Non-profit Other')} className='create-company-industry-option'> Non-profit Other</dd>
                </dl>
                <dl>

                    <dt>Other</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Other')} className='create-company-industry-option'>Other</dd>
                </dl>
                <dl>

                    <dt>Real Estate and Construction</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Architecture, Engineering and Design')} className='create-company-industry-option'>Architecture, Engineering and Design</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Construction Equipment and Supplies')} className='create-company-industry-option'>Construction Equipment and Supplies</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Construction and Remodeling')} className='create-company-industry-option'>Construction and Remodeling</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Property Leasing and Management')} className='create-company-industry-option'>Property Leasing and Management</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Real Estate Agents and Appraisers')} className='create-company-industry-option'>Real Estate Agents and Appraisers</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Real Estate Investment and Development')} className='create-company-industry-option'>Real Estate Investment and Development</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Real Estate and Construction Other')} className='create-company-industry-option'>Real Estate and Construction Other</dd>
                </dl>
                <dl>

                    <dt>Retail</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Automobile Parts and Supplies')} className='create-company-industry-option'>Automobile Parts and Supplies</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Beer, Wine and Liquor Stores')} className='create-company-industry-option'>Beer, Wine and Liquor Stores</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Clothing and Shoe Stores')} className='create-company-industry-option'>Clothing and Shoe Stores</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Department Stores')} className='create-company-industry-option'>Department Stores</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Florist')} className='create-company-industry-option'>Florist</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Furniture Stores')} className='create-company-industry-option'>Furniture Stores</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Gasoline Stations')} className='create-company-industry-option'>Gasoline Stations</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Grocery and Specialty Stores')} className='create-company-industry-option'>Grocery and Specialty Stores</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Hardware and Building Material Dealers')} className='create-company-industry-option'>Hardware and Building Material Dealers</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Jewelry, Luggage, and Leather Goods')} className='create-company-industry-option'>Jewelry, Luggage, and Leather Goods</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Retail Others')} className='create-company-industry-option'>Retail Others</dd>
                </dl>
                <dl>
                    <dt>Software and Internet</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Data Analytics, Management, and Internet')} className='create-company-industry-option'>Data Analytics, Management, and Internet</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('E-Commerce and Internet Business')} className='create-company-industry-option'>E-Commerce and Internet Business</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Games and Gaming')} className='create-company-industry-option'>Games and Gaming</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Software')} className='create-company-industry-option'>Software</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Software and Internet Other')} className='create-company-industry-option'>Software and Internet Other</dd>
                </dl>
                <dl>

                    <dt>Travel Recreation and Leisure</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Amusement Parks and Attractions')} className='create-company-industry-option'>Amusement Parks and Attractions</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Cruise Ship Operations')} className='create-company-industry-option'>Cruise Ship Operations</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Gambling and Gaming Lodging')} className='create-company-industry-option'>Gambling and Gaming Lodging</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Participatory Sports and Recreation')} className='create-company-industry-option'>Participatory Sports and Recreation</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Passenger Airlines')} className='create-company-industry-option'> Passenger Airlines</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Rental Cars')} className='create-company-industry-option'>Rental Cars</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Resorts and Casinos')} className='create-company-industry-option'>Resorts and Casinos</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Spectator Sports and Teams')} className='create-company-industry-option'>Spectator Sports and Teams</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Taxi, Buses and Transit Systems')} className='create-company-industry-option'>Taxi, Buses and Transit Systems</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Travel Agents and Services')} className='create-company-industry-option'>Travel Agents and Services</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Travel, Recreations and Leisure Other')} className='create-company-industry-option'>Travel, Recreations and Leisure Other</dd>
                </dl>
                <dl>

                    <dt>Wholesale and Distribution</dt>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Apparel Wholesalers')} className='create-company-industry-option'>Apparel Wholesalers</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Automobile Parts Wholesalers')} className='create-company-industry-option'>Automobile Parts Wholesalers</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Beer, Wine and Liquor Wholesalers')} className='create-company-industry-option'>Beer, Wine and Liquor Wholesalers</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Chemicals and Plastics Wholesalers')} className='create-company-industry-option'>Chemicals and Plastics Wholesalers</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Grocery and Food Wholesalers')} className='create-company-industry-option'>Grocery and Food Wholesalers</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Lumber and Construction Materials Wholesalers')} className='create-company-industry-option'>Lumber and Construction Materials Wholesalers</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Metal and Mineral Wholesalers')} className='create-company-industry-option'>Metal and Mineral Wholesalers</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Office Equipment and Suppliers Wholesalers')} className='create-company-industry-option'> Office Equipment and Suppliers Wholesalers</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Petroleum Products Wholesalers')} className='create-company-industry-option'>Petroleum Products Wholesalers</dd>
                    
                    <dd onClick={() => this.props.addCompanyIndustry('Wholesale and Distribution Other')} className='create-company-industry-option'>Wholesale and Distribution Other</dd>
                </dl>*/}
            </div> 

        )
    }
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { addCompanyIndustry })(CreateCompanyIndustry);