import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AdManagement from "./pages/AdManagement";
import AdManagementOne from "./pages/AdManagementOne";
import AdManagementTwo from "./pages/AdManagementTwo";
import AdManagementBuyNow from "./pages/AdManagementBuyNow";
import AdManagementThree from "./pages/AdManagementThree";
import AdManagementFour from "./pages/AdManagementFour";
import AdManagementBuyNowOne from "./pages/AdManagementBuyNowOne";
import WhileBuyingVehicleComparision from "./pages/WhileBuyingVehicleComparision";
import WhileBuyingVehicleValuation from "./pages/WhileBuyingVehicleValuation";
import WhileBuyingVehicleValuationOne from "./pages/WhileBuyingVehicleValuationOne";
import WhileBuyingVehicleDamageInquiry from "./pages/WhileBuyingVehicleDamageInquiry";
import WhileBuyingMyPastQueries from "./pages/WhileBuyingMyPastQueries";
import AutoExpertise from "./pages/AutoExpertise";
import WhileBuyingVehicleBuyingGuide from "./pages/WhileBuyingVehicleBuyingGuide";
import WhileBuyingVehicleBuyingGuideOne from "./pages/WhileBuyingVehicleBuyingGuideOne";
import WhileBuyingVehicleBuyingGuideTwo from "./pages/WhileBuyingVehicleBuyingGuideTwo";
import WhileBuyingVehicleBuyingGuideThree from "./pages/WhileBuyingVehicleBuyingGuideThree";
import RealEstateExpertiseProperty from "./pages/RealEstateExpertiseProperty";
import Cart from "./pages/Cart";
import Home1 from "./pages/Home1";
import AdDetails from "./pages/AdDetails";
import Postanadnow from "./pages/Postanadnow";
import PostanadnowOne from "./pages/PostanadnowOne";
import CategoriesCars from "./pages/CategoriesCars";
import CategoriesMobilePhone from "./pages/CategoriesMobilePhone";
import MaintenanceRepair from "./pages/MaintenanceRepair";
import Credit from "./pages/Credit";
import MyShoppingTransactionsMydelivery from "./pages/MyShoppingTransactionsMydelivery";
import MyShoppingTransactionsMyBank from "./pages/MyShoppingTransactionsMyBank";
import MyShoppingTransactionsMydeliveryOne from "./pages/MyShoppingTransactionsMydeliveryOne";
import MyShoppingTransactionsMydeliveryTwo from "./pages/MyShoppingTransactionsMydeliveryTwo";
import MyShoppingTransactionsMyPurchase from "pages/MyShoppingTransactionsMyPurchase";
import MyShoppingTransactionsMySales from "./pages/MyShoppingTransactionsMySales";
import MyShoppingTransactionsMyDeliveryThree from "pages/MyShoppingTransactionsMyDeliveryThree";
import MyShoppingTransactionsMyBankOne from "./pages/MyShoppingTransactionsMyBankOne";
import MyShoppingTransactionsMyHead from "./pages/MyShoppingTransactionsMyHead";
import MyShoppingTransactionsWhat from "./pages/MyShoppingTransactionsWhat";
import MyShoppingTransactionsWhatOne from "./pages/MyShoppingTransactionsWhatOne";
import MyShoppingTransactionsSummary from "./pages/MyShoppingTransactionsSummary";
import MyShoppingTransactionsMyCurrent from "./pages/MyShoppingTransactionsMyCurrent";
import MyShoppingTransactionsReturn from "./pages/MyShoppingTransactionsReturn";
import MyShoppingTransactionsMyCompleted from "./pages/MyShoppingTransactionsMyCompleted";
import MyShoppingTransactionsMydistance from "./pages/MyShoppingTransactionsMydistance";
import MyShoppingTransactionsMyProduct from "./pages/MyShoppingTransactionsMyProduct";
import MyShoppingTransactionsWhatTwo from "./pages/MyShoppingTransactionsWhatTwo";
import MyShoppingTransactionsapproval from "./pages/MyShoppingTransactionsapproval";
import MyShoppingTransactionsMySuccessful from "./pages/MyShoppingTransactionsMySuccessful";
import MyShoppingTransactionsReturnOne from "./pages/MyShoppingTransactionsReturnOne";
import MyShoppingTransactionsMyProducts from "pages/MyShoppingTransactionsMyProducts";
import MyShoppingTransactionsMyBankTwo from "./pages/MyShoppingTransactionsMyBankTwo";
import MyShoppingTransactionsMyHeadOne from "./pages/MyShoppingTransactionsMyHeadOne";
import MyShoppingTransactionsMyDistanceOne from "./pages/MyShoppingTransactionsMyDistanceOne";
import MyShoppingTransactionsMydeliveryFour from "./pages/MyShoppingTransactionsMydeliveryFour";
import MyShoppingTransactionsComment from "./pages/MyShoppingTransactionsComment";
import MyShoppingTransactionsCommentOne from "./pages/MyShoppingTransactionsCommentOne";
import MyShoppingTransactionsCommentTwo from "./pages/MyShoppingTransactionsCommentTwo";
import WhileSellingVehicleValuation from "./pages/WhileSellingVehicleValuation";
import WhileSellingVehicleValuationOne from "./pages/WhileSellingVehicleValuationOne";
import WhileSellingVehicleSalesGuide from "./pages/WhileSellingVehicleSalesGuide";
import WhileSellingAutoDictionary from "./pages/WhileSellingAutoDictionary";
import WhileSellingVehicleSalesGuideOne from "./pages/WhileSellingVehicleSalesGuideOne";
import WhileSellingVehicleSalesGuideTwo from "./pages/WhileSellingVehicleSalesGuideTwo";
import WhileSellingVehicleSalesGuideThree from "./pages/WhileSellingVehicleSalesGuideThree";
import WhileSellingVehicleSalesGuideFour from "./pages/WhileSellingVehicleSalesGuideFour";
import WhileSellingVehicleSalesGuideFive from "./pages/WhileSellingVehicleSalesGuideFive";
import AutoExpertiseOne from "./pages/AutoExpertiseOne";
import MyAccountMyPersonalInformation from "./pages/MyAccountMyPersonalInformation";
import MyAccountMyPersonalInformationOne from "./pages/MyAccountMyPersonalInformationOne";
import MyAccountEmail from "./pages/MyAccountEmail";
import MyAccountMobilePhone from "./pages/MyAccountMobilePhone";
import MyAccountPasswordChange from "./pages/MyAccountPasswordChange";
import MyAccountAccountVerification from "./pages/MyAccountAccountVerification";
import MyAccountAccountCancellation from "./pages/MyAccountAccountCancellation";
import MyAccountSecurity2StepVerification from "./pages/MyAccountSecurity2StepVerification";
import MyAccountSecurityRecoverEmail from "./pages/MyAccountSecurityRecoverEmail";
import MyAccountSecuritySessions from "./pages/MyAccountSecuritySessions";
import MyAccountMySavedCards from "./pages/MyAccountMySavedCards";
import MyAccountMyAccountActivities from "./pages/MyAccountMyAccountActivities";
import MyAccountAccountHolders from "./pages/MyAccountAccountHolders";
import MyAccountMyPermissionsNotification from "./pages/MyAccountMyPermissionsNotification";
import MyAccountElectronicMessage from "./pages/MyAccountElectronicMessage";
import MyAccountMessageReadInformation from "./pages/MyAccountMessageReadInformation";
import MessagesandNotificationsMy from "./pages/MessagesandNotificationsMy";
import MessagesandNotificationsInformations from "./pages/MessagesandNotificationsInformations";
import MessagesandNotificationsMyOne from "./pages/MessagesandNotificationsMyOne";
import MessagesandNotificationsMyTwo from "./pages/MessagesandNotificationsMyTwo";
import MessagesandNotificationsMyThree from "./pages/MessagesandNotificationsMyThree";
import FavoritesFavoriteListings from "./pages/FavoritesFavoriteListings";
import FavoritesFavoriteSeaches from "./pages/FavoritesFavoriteSeaches";
import FavoritesFavoriteSellers from "./pages/FavoritesFavoriteSellers";
import SahibindenRealEstate360 from "pages/SahibindenRealEstate360";
import CreditOne from "./pages/CreditOne";
import RealEstateExpertise from "./pages/RealEstateExpertise";
import RealEstateIndex from "./pages/RealEstateIndex";
import PropertyBuyingGuide from "./pages/PropertyBuyingGuide";
import RealEstateIndexWhenSelling from "./pages/RealEstateIndexWhenSelling";
import RealEstateExpertisePropertyOne from "./pages/RealEstateExpertisePropertyOne";
import RealEstateExpertisePropertyTwo from "./pages/RealEstateExpertisePropertyTwo";
import RealEstateDictionary from "./pages/RealEstateDictionary";
import RealEstateIndexWhenRenting from "./pages/RealEstateIndexWhenRenting";
import RealEstateExpertiseWhenRenting from "./pages/RealEstateExpertiseWhenRenting";
import RealEstateDictionaryWhenRenting from "./pages/RealEstateDictionaryWhenRenting";
import RealEstateExpertiseWhenRentingOne from "./pages/RealEstateExpertiseWhenRentingOne";
import RealEstateExpertiseWhenRentingTwo from "./pages/RealEstateExpertiseWhenRentingTwo";
import RealEstateExpertiseAfterLease from "./pages/RealEstateExpertiseAfterLease";
import RealEstateExpertiseAfterLeaseOne from "./pages/RealEstateExpertiseAfterLeaseOne";
import RealEstateIndex10Stepsfor from "./pages/RealEstateIndex10Stepsfor";
import CreditTwo from "./pages/CreditTwo";
import RealEstateIndexWhenSellingOne from "./pages/RealEstateIndexWhenSellingOne";
import RealEstateExpertiseWhenSelling from "./pages/RealEstateExpertiseWhenSelling";
import RealEstateDictionaryWhenSelling from "./pages/RealEstateDictionaryWhenSelling";
import RealEstateIndexWhenSellingTwo from "./pages/RealEstateIndexWhenSellingTwo";
import RealEstateExpertiseAfterLeaseTwo from "./pages/RealEstateExpertiseAfterLeaseTwo";
import RealEstateExpertiseAfterLeaseThree from "./pages/RealEstateExpertiseAfterLeaseThree";
import ZeroVehicleWorld from "./pages/ZeroVehicleWorld";
import ZeroVehicleWorldNewVehicle from "./pages/ZeroVehicleWorldNewVehicle";
import ZeroVehicleWorldZeroVehicle from "./pages/ZeroVehicleWorldZeroVehicle";
import ZeroVehicleWorldCampaignVehicles from "./pages/ZeroVehicleWorldCampaignVehicles";
import ZeroVehicleWorldFindanAuthorized from "./pages/ZeroVehicleWorldFindanAuthorized";
import ZeroVehicleWorldElectricVehicle from "./pages/ZeroVehicleWorldElectricVehicle";
import Services from "./pages/Services";
import ServicesOne from "./pages/ServicesOne";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "admanagement", element: <AdManagement /> },
    { path: "admanagementone", element: <AdManagementOne /> },
    { path: "admanagementtwo", element: <AdManagementTwo /> },
    { path: "admanagementbuynow", element: <AdManagementBuyNow /> },
    { path: "admanagementthree", element: <AdManagementThree /> },
    { path: "admanagementfour", element: <AdManagementFour /> },
    { path: "admanagementbuynowone", element: <AdManagementBuyNowOne /> },
    {
      path: "whilebuyingvehiclecomparision",
      element: <WhileBuyingVehicleComparision />,
    },
    {
      path: "whilebuyingvehiclevaluation",
      element: <WhileBuyingVehicleValuation />,
    },
    {
      path: "whilebuyingvehiclevaluationone",
      element: <WhileBuyingVehicleValuationOne />,
    },
    {
      path: "whilebuyingvehicledamageinquiry",
      element: <WhileBuyingVehicleDamageInquiry />,
    },
    { path: "whilebuyingmypastqueries", element: <WhileBuyingMyPastQueries /> },
    { path: "autoexpertise", element: <AutoExpertise /> },
    {
      path: "whilebuyingvehiclebuyingguide",
      element: <WhileBuyingVehicleBuyingGuide />,
    },
    {
      path: "whilebuyingvehiclebuyingguideone",
      element: <WhileBuyingVehicleBuyingGuideOne />,
    },
    {
      path: "whilebuyingvehiclebuyingguidetwo",
      element: <WhileBuyingVehicleBuyingGuideTwo />,
    },
    {
      path: "whilebuyingvehiclebuyingguidethree",
      element: <WhileBuyingVehicleBuyingGuideThree />,
    },
    {
      path: "realestateexpertiseproperty",
      element: <RealEstateExpertiseProperty />,
    },
    { path: "cart", element: <Cart /> },
    { path: "home1", element: <Home1 /> },
    { path: "addetails", element: <AdDetails /> },
    { path: "postanadnow", element: <Postanadnow /> },
    { path: "postanadnowone", element: <PostanadnowOne /> },
    { path: "categoriescars", element: <CategoriesCars /> },
    { path: "categoriesmobilephone", element: <CategoriesMobilePhone /> },
    { path: "maintenancerepair", element: <MaintenanceRepair /> },
    { path: "credit", element: <Credit /> },
    {
      path: "myshoppingtransactionsmydelivery",
      element: <MyShoppingTransactionsMydelivery />,
    },
    {
      path: "myshoppingtransactionsmybank",
      element: <MyShoppingTransactionsMyBank />,
    },
    {
      path: "myshoppingtransactionsmydeliveryone",
      element: <MyShoppingTransactionsMydeliveryOne />,
    },
    {
      path: "myshoppingtransactionsmydeliverytwo",
      element: <MyShoppingTransactionsMydeliveryTwo />,
    },
    {
      path: "myshoppingtransactionsmypurchase",
      element: <MyShoppingTransactionsMyPurchase />,
    },
    {
      path: "myshoppingtransactionsmysales",
      element: <MyShoppingTransactionsMySales />,
    },
    {
      path: "myshoppingtransactionsmydeliverythree",
      element: <MyShoppingTransactionsMyDeliveryThree />,
    },
    {
      path: "myshoppingtransactionsmybankone",
      element: <MyShoppingTransactionsMyBankOne />,
    },
    {
      path: "myshoppingtransactionsmyhead",
      element: <MyShoppingTransactionsMyHead />,
    },
    {
      path: "myshoppingtransactionswhat",
      element: <MyShoppingTransactionsWhat />,
    },
    {
      path: "myshoppingtransactionswhatone",
      element: <MyShoppingTransactionsWhatOne />,
    },
    {
      path: "myshoppingtransactionssummary",
      element: <MyShoppingTransactionsSummary />,
    },
    {
      path: "myshoppingtransactionsmycurrent",
      element: <MyShoppingTransactionsMyCurrent />,
    },
    {
      path: "myshoppingtransactionsreturn",
      element: <MyShoppingTransactionsReturn />,
    },
    {
      path: "myshoppingtransactionsmycompleted",
      element: <MyShoppingTransactionsMyCompleted />,
    },
    {
      path: "myshoppingtransactionsmydistance",
      element: <MyShoppingTransactionsMydistance />,
    },
    {
      path: "myshoppingtransactionsmyproduct",
      element: <MyShoppingTransactionsMyProduct />,
    },
    {
      path: "myshoppingtransactionswhattwo",
      element: <MyShoppingTransactionsWhatTwo />,
    },
    {
      path: "myshoppingtransactionsapproval",
      element: <MyShoppingTransactionsapproval />,
    },
    {
      path: "myshoppingtransactionsmysuccessful",
      element: <MyShoppingTransactionsMySuccessful />,
    },
    {
      path: "myshoppingtransactionsreturnone",
      element: <MyShoppingTransactionsReturnOne />,
    },
    {
      path: "myshoppingtransactionsmyproducts",
      element: <MyShoppingTransactionsMyProducts />,
    },
    {
      path: "myshoppingtransactionsmybanktwo",
      element: <MyShoppingTransactionsMyBankTwo />,
    },
    {
      path: "myshoppingtransactionsmyheadone",
      element: <MyShoppingTransactionsMyHeadOne />,
    },
    {
      path: "myshoppingtransactionsmydistanceone",
      element: <MyShoppingTransactionsMyDistanceOne />,
    },
    {
      path: "myshoppingtransactionsmydeliveryfour",
      element: <MyShoppingTransactionsMydeliveryFour />,
    },
    {
      path: "myshoppingtransactionscomment",
      element: <MyShoppingTransactionsComment />,
    },
    {
      path: "myshoppingtransactionscommentone",
      element: <MyShoppingTransactionsCommentOne />,
    },
    {
      path: "myshoppingtransactionscommenttwo",
      element: <MyShoppingTransactionsCommentTwo />,
    },
    {
      path: "whilesellingvehiclevaluation",
      element: <WhileSellingVehicleValuation />,
    },
    {
      path: "whilesellingvehiclevaluationone",
      element: <WhileSellingVehicleValuationOne />,
    },
    {
      path: "whilesellingvehiclesalesguide",
      element: <WhileSellingVehicleSalesGuide />,
    },
    {
      path: "whilesellingautodictionary",
      element: <WhileSellingAutoDictionary />,
    },
    {
      path: "whilesellingvehiclesalesguideone",
      element: <WhileSellingVehicleSalesGuideOne />,
    },
    {
      path: "whilesellingvehiclesalesguidetwo",
      element: <WhileSellingVehicleSalesGuideTwo />,
    },
    {
      path: "whilesellingvehiclesalesguidethree",
      element: <WhileSellingVehicleSalesGuideThree />,
    },
    {
      path: "whilesellingvehiclesalesguidefour",
      element: <WhileSellingVehicleSalesGuideFour />,
    },
    {
      path: "whilesellingvehiclesalesguidefive",
      element: <WhileSellingVehicleSalesGuideFive />,
    },
    { path: "autoexpertiseone", element: <AutoExpertiseOne /> },
    {
      path: "myaccountmypersonalinformation",
      element: <MyAccountMyPersonalInformation />,
    },
    {
      path: "myaccountmypersonalinformationone",
      element: <MyAccountMyPersonalInformationOne />,
    },
    { path: "myaccountemail", element: <MyAccountEmail /> },
    { path: "myaccountmobilephone", element: <MyAccountMobilePhone /> },
    { path: "myaccountpasswordchange", element: <MyAccountPasswordChange /> },
    {
      path: "myaccountaccountverification",
      element: <MyAccountAccountVerification />,
    },
    {
      path: "myaccountaccountcancellation",
      element: <MyAccountAccountCancellation />,
    },
    {
      path: "myaccountsecurity2stepverification",
      element: <MyAccountSecurity2StepVerification />,
    },
    {
      path: "myaccountsecurityrecoveremail",
      element: <MyAccountSecurityRecoverEmail />,
    },
    {
      path: "myaccountsecuritysessions",
      element: <MyAccountSecuritySessions />,
    },
    { path: "myaccountmysavedcards", element: <MyAccountMySavedCards /> },
    {
      path: "myaccountmyaccountactivities",
      element: <MyAccountMyAccountActivities />,
    },
    { path: "myaccountaccountholders", element: <MyAccountAccountHolders /> },
    {
      path: "myaccountmypermissionsnotification",
      element: <MyAccountMyPermissionsNotification />,
    },
    {
      path: "myaccountelectronicmessage",
      element: <MyAccountElectronicMessage />,
    },
    {
      path: "myaccountmessagereadinformation",
      element: <MyAccountMessageReadInformation />,
    },
    {
      path: "messagesandnotificationsmy",
      element: <MessagesandNotificationsMy />,
    },
    {
      path: "messagesandnotificationsinformations",
      element: <MessagesandNotificationsInformations />,
    },
    {
      path: "messagesandnotificationsmyone",
      element: <MessagesandNotificationsMyOne />,
    },
    {
      path: "messagesandnotificationsmytwo",
      element: <MessagesandNotificationsMyTwo />,
    },
    {
      path: "messagesandnotificationsmythree",
      element: <MessagesandNotificationsMyThree />,
    },
    {
      path: "favoritesfavoritelistings",
      element: <FavoritesFavoriteListings />,
    },
    { path: "favoritesfavoriteseaches", element: <FavoritesFavoriteSeaches /> },
    { path: "favoritesfavoritesellers", element: <FavoritesFavoriteSellers /> },
    { path: "sahibindenrealestate360", element: <SahibindenRealEstate360 /> },
    { path: "creditone", element: <CreditOne /> },
    { path: "realestateexpertise", element: <RealEstateExpertise /> },
    { path: "realestateindex", element: <RealEstateIndex /> },
    { path: "propertybuyingguide", element: <PropertyBuyingGuide /> },
    {
      path: "realestateindexwhenselling",
      element: <RealEstateIndexWhenSelling />,
    },
    {
      path: "realestateexpertisepropertyone",
      element: <RealEstateExpertisePropertyOne />,
    },
    {
      path: "realestateexpertisepropertytwo",
      element: <RealEstateExpertisePropertyTwo />,
    },
    { path: "realestatedictionary", element: <RealEstateDictionary /> },
    {
      path: "realestateindexwhenrenting",
      element: <RealEstateIndexWhenRenting />,
    },
    {
      path: "realestateexpertisewhenrenting",
      element: <RealEstateExpertiseWhenRenting />,
    },
    {
      path: "realestatedictionarywhenrenting",
      element: <RealEstateDictionaryWhenRenting />,
    },
    {
      path: "realestateexpertisewhenrentingone",
      element: <RealEstateExpertiseWhenRentingOne />,
    },
    {
      path: "realestateexpertisewhenrentingtwo",
      element: <RealEstateExpertiseWhenRentingTwo />,
    },
    {
      path: "realestateexpertiseafterlease",
      element: <RealEstateExpertiseAfterLease />,
    },
    {
      path: "realestateexpertiseafterleaseone",
      element: <RealEstateExpertiseAfterLeaseOne />,
    },
    {
      path: "realestateindex10stepsfor",
      element: <RealEstateIndex10Stepsfor />,
    },
    { path: "credittwo", element: <CreditTwo /> },
    {
      path: "realestateindexwhensellingone",
      element: <RealEstateIndexWhenSellingOne />,
    },
    {
      path: "realestateexpertisewhenselling",
      element: <RealEstateExpertiseWhenSelling />,
    },
    {
      path: "realestatedictionarywhenselling",
      element: <RealEstateDictionaryWhenSelling />,
    },
    {
      path: "realestateindexwhensellingtwo",
      element: <RealEstateIndexWhenSellingTwo />,
    },
    {
      path: "realestateexpertiseafterleasetwo",
      element: <RealEstateExpertiseAfterLeaseTwo />,
    },
    {
      path: "realestateexpertiseafterleasethree",
      element: <RealEstateExpertiseAfterLeaseThree />,
    },
    { path: "zerovehicleworld", element: <ZeroVehicleWorld /> },
    {
      path: "zerovehicleworldnewvehicle",
      element: <ZeroVehicleWorldNewVehicle />,
    },
    {
      path: "zerovehicleworldzerovehicle",
      element: <ZeroVehicleWorldZeroVehicle />,
    },
    {
      path: "zerovehicleworldcampaignvehicles",
      element: <ZeroVehicleWorldCampaignVehicles />,
    },
    {
      path: "zerovehicleworldfindanauthorized",
      element: <ZeroVehicleWorldFindanAuthorized />,
    },
    {
      path: "zerovehicleworldelectricvehicle",
      element: <ZeroVehicleWorldElectricVehicle />,
    },
    { path: "services", element: <Services /> },
    { path: "servicesone", element: <ServicesOne /> },
  ]);
  return element;
};
export default ProjectRoutes;
