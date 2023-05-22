import './App.css';
import { BrowserRouter as Router,Route, Routes, useNavigate, useLocation, useParams} from "react-router-dom";
import AddAdvertiser from './components/AddAdvertiser';
import AdPackages from './components/AdPackages';
import AddAdvertisement from './components/AddAdvertisement';
import ViewAdvertisers from "./components/ViewAdvertisers";
import UpdateAdvertiser from "./components/UpdateAdvertiser";
import ViewAdvertisements from './components/ViewAdvertisements';


import AddnewHotel from './components/AddnewHotel';

import ViewRoom from './components/ViewRoom';
import CheckInInfo from './components/CheckInInfo';

import VehicleReserve from './components/VehicleReserve';
import VehicleReserveAdmin from './components/VehicleReserveAdmin';
import VehicleHomepage from './components/VehicleHomepage';
import VehicleReserveUpdate from './components/VehicleReserveUpdate';
import VehicleRegistration from './components/VehicleRegistration';
import VehicleEndReserveDriver from './components/VehicleEndReserveDriver';
import VehicleEndTripForm from './components/VehicleEndTripForm';
import VehicleRenting from './components/VehicleRenting';
import VehicleViewAllVehicles from './components/VehicleViewAllVehicles';
import ApproveDrivers from './components/ApproveDrivers';
import VehicleDriverRegistration from './components/VehicleDriverRegistration';
import VehicleAcceptDriver from './components/VehicleAcceptDriver';

import AdminHeader from './components/AdminHeader';
import EditHotel from './components/EditHotel';
import AddDestinationmanager from './components/AddDestinationmanager';
import CreateDestination from './components/CreateDestination';
import ReserveDestination from './components/ReserveDestination';
import ViewDestinationmanagers from './components/ViewDestinationmanagers';
import AdvertiserHeader from './components/AdvertiserHeader';
import AdvertiserProfile from './components/AdvertiserProfile';
import AdvertiserAdvertisements from './components/AdvertiserAdvertisements';
import ViewAcceptedAdvertisements from './components/ViewAcceptedAdvertisements';
import GenAdvertisingReport from './components/GenAdvertisingReport';
import AdminHotelApprove from './components/AdminHotelApprove';
import GenHotelReport from './components/GenHotelReport';
import ViewReservedDestinations from './components/ViewReservedDestinations';
import DestinationHome from './components/DestinationHome';
import DestinationPackages from './components/DestinationPackages';
import ViewInsurance from './components/ViewInsurance';
import InsuranceApplicationForm from './components/InsuranceApplicationForm'

import InsuranceAboutUs from './components/InsuranceAboutUs'
import InsuranceClaim from './components/InsuranceClaim'
import InsuranceContact from './components/InsuranceContact'
import InsuranceLife from './components/InsuranceLife'
import InsuranceHealth from './components/InsuranceHealth'
import InsurancePlanApply from './components/InsurancePlanApply'
import CustomerManagement from './components/InsuranceAdmin-CustomerManagement'
import ClaimManagement from './components/InsuranceCompany-ClaimManagement'
import FeedbackManagement from './components/InsuranceCompany-FeedbackManagement'
import PlanManagement from './components/InsuranceCompany-PlanManagement'
import EditPlan from './components/Insurance/EditPlan'
import EditFeedback from './components/Insurance/EditFeedback'
import EditCustomer from './components/Insurance/EditCustomer'
import EditClaim from './components/Insurance/EditClaim'
import InsuranceCompanyReport from './components/InsuranceCompanyReport'
import InsuranceMain from './components/InsuranceMain'
import InsuranceCompany from './components/InsuranceCompany'
import InsuranceUser from './components/InsuranceUser'



import AdvertisingHome from './components/AdvertisingHome';
import ViewHotel from './components/ViewHotels';
import UpdateDestinationmanager from './components/UpdateDestinationmanager';
import UpdateReservedDestination from './components/UpdateReservedDestination';
import DestinationManagerHeader from './components/DestinationManagerHeader';
import DestinationManagerProfile from './components/DestinationManagerProfile';
import ViewDesPackages from './components/ViewDesPackages';
import UpdateDestinationPackage from './components/UpdateDestinationPackage';
import GenDestinationReport from './components/GenDestinationReport';

import UserFooter from './components/UserFooter';
import AddNewRoom from './components/AddNewRoom';
import Home from './components/Home';
import AddOutdoorAct from './components/AddOutdoorAct';
import AllAdventure from './components/AllAdventure';
import AdminAdvenView from './components/AdminAdvenView';
import EditOutdoor from './components/EditOutdoor';
import OneOutAct from './components/OneOutAct';
import ResAdvenAct from './components/ResAdvenAct';
import OutdoorFeedback from './components/OutdoorFeedback';
import AdminOutFeedView from './components/AdminOutFeedView';
import WhoSCheckIn from './components/WhoSCheckin';
import Login from './components/Login';


import AdminResiveOutView from './components/AdminResiveOutView';
import GenOutdoorReport from './components/GenOutdoorReport';

import AdminManagePayment from './components/AdminManagePayment'
import PaymentForm from "./components/PaymentForm";
import EditPayment from './components/EditPayment';
import UserForm from './components/User';
import UserSideBar from './components/UserSideBar';
import BookedRooms from './components/BookedRooms';
import UserProfile from './components/UserProfile';
import UserProfileHeader from './components/UserProfileHeader';
import UpdateUserdetails from './components/UpdateUserdetails';
import VehicleMaintenance from './components/VehicleMaintenance';



function App() {

  return (
    <Router>

    <div>
   
      <Routes>
      <Route path="/insuranceform" exact element={<ViewInsurance/>}/>
      <Route path="/InsuranceApplicationForm" exact element={<InsuranceApplicationForm/>}/>
      <Route path="/InsuranceMain" exact element={<InsuranceMain/>}/>
      <Route path="/InsuranceAboutUs" exact element={<InsuranceAboutUs/>}/>
      <Route path="/InsuranceClaim" exact element={<InsuranceClaim/>}/>
      <Route path="/InsuranceContact" exact element={<InsuranceContact/>}/>
      <Route path="/InsuranceLife" exact element={<InsuranceLife/>}/>
      <Route path="/InsuranceHealth" exact element={<InsuranceHealth/>}/>
      <Route path="/InsurancePlanApply" exact element={<InsurancePlanApply/>}/>
      <Route path="/InsuranceAdmin-CustomerManagement" exact element={<CustomerManagement/>}/>
      <Route path="/InsuranceCompany-ClaimManagement" exact element={<ClaimManagement/>}/>
      <Route path="/InsuranceCompany-FeedbackManagement" exact element={<FeedbackManagement/>}/>
      <Route path="/InsuranceCompany-PlanManagement" exact element={<PlanManagement/>}/>
      <Route path="/EditPlan/:id" exact element={<EditPlan/>}/>
      <Route path="/EditFeedback/:id" exact element={<EditFeedback/>}/>
      <Route path="/EditCustomer/:id" exact element={<EditCustomer/>}/>
      <Route path="/EditClaim/:id" exact element={<EditClaim/>}/>
      <Route path="/InsuranceCompanyReport" exact element={<InsuranceCompanyReport/>}/>
      <Route path="/InsuranceCompany" exact element={<InsuranceCompany/>}/>
      <Route path="/InsuranceUser" exact element={<InsuranceUser/>}/>
      <Route path="/UserFooter" exact element={<UserFooter/>}/>
      
   
      <Route path="/hotels" exact element={<ViewHotel/>}/>
      <Route path="/hotels/view/:id" exact element ={<ViewRoom/>}/>
      <Route path="/hotels/reserve/:id" exact element={<CheckInInfo/>}/>
      <Route path="/newhotel" exact element={<AddnewHotel/>}/>
      <Route path="/hotelOwner/home" exact element={<EditHotel/>}/>
      <Route path='/hotelOwner/checkin' exact element={<WhoSCheckIn/>}/>
 
      <Route path="/vehicleReservationForm/:id" exact element={<VehicleReserve/>}/>
      <Route path="/AdminHeader" exact element={<AdminHeader/>}/>
      <Route path="/approveHotel" exact element={<AdminHotelApprove/>}/>

      <Route path="/hotelOwner/Report/:id" exact element={<GenHotelReport/>}/>
      <Route path="/hotelOwner/addRoom/:id" exact element={<AddNewRoom/>}/>
      <Route path="/vehicleEndReserveDriver" exact element={<VehicleEndReserveDriver/>}/>
      <Route path="/vehicleEndTripForm/:id" exact element={<VehicleEndTripForm/>}/>

      <Route path="/hotelOwner/Report" exact element={<GenHotelReport/>}/>
      <Route path="/hotelOwner/addRoom" exact element={<AddNewRoom/>}/>


      <Route path="/AdminHeader" exact element={<AdminHeader/>}/>
      
    
      <Route path="/vehicleAcceptDriver" exact element={<VehicleAcceptDriver/>}/>
      <Route path="/destinationmanagerform" exact element={<AddDestinationmanager/>}/>
      <Route path="/createdestinationform" exact element={<CreateDestination/>}/>
      <Route path="/reservedestinationform" exact element={<ReserveDestination/>}/>
      <Route path="/adminViewDestinationManager" exact element={<ViewDestinationmanagers/>}/>
      <Route path="/ViewDestinationPackages" exact element={<ViewDesPackages/>}/>
      <Route path="/destinationmanagerViewReservedDestination" exact element={<ViewReservedDestinations/>}/>
      <Route path="/userViewReservedDestination" exact element={<ViewReservedDestinations/>}/>
      <Route path="/destinationHome" exact element={<DestinationHome/>}/>
      <Route path="/destinationPackages/:id" exact element={<DestinationPackages/>}/>
      <Route path ="/updateDestinationmanagers" element = {<UpdateDestinationmanager/>}/>
      <Route path ="/updateReservedDestination/:id" element = {<UpdateReservedDestination/>}/>
      <Route path="/destinationManager/home/:id" exact element={<UpdateDestinationmanager/>}/>
      <Route path="/destinationManagerHeader" exact element={<DestinationManagerHeader/>}/>
      <Route path="/destinationManagerProfile" exact element={<DestinationManagerProfile/>}/>
      <Route path ="/updateDestinationPackage/:id" element = {<UpdateDestinationPackage/>}/>
      <Route path="/reservedDestinationReports" exact element={<GenDestinationReport/>}/>
  
   
   
      <Route path="/vehicleViewAllVehicles" exact element={<VehicleViewAllVehicles/>}/>
      <Route path="/vehicleReserveAdmin" exact element={<VehicleReserveAdmin/>}/>
      <Route path="/vehicleHomepage" exact element={<VehicleHomepage/>}/>
      <Route path="/vehicleRegistration" exact element={<VehicleRegistration/>}/>
      <Route path = "/register" exact element = {<AddAdvertiser/>} />
      <Route path = "/select" exact element = {<AdPackages/>} />
      <Route path = "/addAd" exact element = {<AddAdvertisement/>} />
      <Route path = "/updateAdvertisers-advertiser/:id" element = {<UpdateAdvertiser/>} />
      <Route path = "/getAdvertisements" element = {<ViewAdvertisements/>} />
      <Route path = "/approveDrivers" element = {<ApproveDrivers/>} />
      <Route path = "/vehicleDriverRegistration" element = {<VehicleDriverRegistration/>} />
      <Route path = "/vehicleReserveUpdate/:id" element = {<VehicleReserveUpdate/>} />
      <Route path = "/vehicleRenting" element = {<VehicleRenting/>} />

      <Route path = "/addAd/:advertiserId?/:packageNo/:price" exact element = {<AddAdvertisement/>} />
      <Route path = "/getAdvertisers" exact element = {<ViewAdvertisers/>} />
      <Route path = "/updateAdvertisers" exact element = {<UpdateAdvertiser/>} />
      <Route path = "/getAdvertisements" exact element = {<ViewAdvertisements/>} />
      <Route path = "/AdvertiserHeader" exact element = {<AdvertiserHeader/>} />
      <Route path = "/advertiserProfile" exact element = {<AdvertiserProfile/>} />
      <Route path = "/advertiserAdvertisements" exact element = {<AdvertiserAdvertisements/>} />
      <Route path = "/viewAcceptedAds" exact element = {<ViewAcceptedAdvertisements/>} />
      <Route path = "/adHome" exact element = {<AdvertisingHome/>} />
      <Route path = "/genAdvertisingReport" exact element = {<GenAdvertisingReport/>} />


      <Route path="/addoutdoor" exact element={<AddOutdoorAct/>} />
      <Route path="/" exact element={<Login/>} />
      <Route path="/AdminAdvenView" exact element={<AdminAdvenView/>} />
      <Route path="/EditOutdoor/:id" exact element={<EditOutdoor/>} />
      <Route path="/OneOutAct/:id" exact element={<OneOutAct/>} />
      <Route path="/ResAdvenAct/:id" exact element={<ResAdvenAct/>} />
      <Route path="/OutdoorFeedback" exact element={<OutdoorFeedback/>} />
      <Route path="/AdminOutFeedView" exact element={<AdminOutFeedView/>} />
      <Route path="/vehicleMaintenance" exact element={<VehicleMaintenance/>} />
      <Route path="/AllAdventure" exact element={<AllAdventure/>} />
      <Route path="/AdminResiveOutView" exact element={<AdminResiveOutView/>} />
      <Route path="/GenOutdoorReport" exact element={<GenOutdoorReport/>} />

      <Route path="/PaymentForm/:price/:item" exact element={<PaymentForm/>} />
      <Route path="/AdminManagePayment" exact element={<AdminManagePayment/>} />
      <Route path="/EditPayment/:id" exact element={<EditPayment/>}/>
      <Route path="/User" exact element={<UserForm/>} />
      <Route path='/sidebar' exact element={<UserSideBar/>}/>
      <Route path='/ReservedRooms' exact element={<BookedRooms/>} />
      <Route path="/UserProfile" exact element={<UserProfile/>} />
      <Route path="/User" exact element={<UserForm/>}/>
      <Route path="/UserProfile" exact element={<UserProfileHeader/>}/>
      <Route path="/UpdateUserdetails" exact element={<UpdateUserdetails/>}/>

      {/* <Route path="/PaymentForm" exact element={<PaymentForm/>} />
      <Route path="/PaymentManagement" exact element={<PaymentManagement/>}/>
      <Route path="/EditPayment/:id" exact element={<EditPayment/>}/> */}
  
      <Route path="/Home" exact element={<Home/>} />

      </Routes>
    </div>
    </Router>
  );
}

export default App;

