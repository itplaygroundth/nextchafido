//import { Component } from 'vue'
//import { BButton } from "bootstrap-vue";
interface AuthSession {
    isLogged:boolean
    username:string
    userid:string
    password:string
    token:string
    expire:string
    provider:string
    email:string
    fname:string
    lname:string
    balance:number
  }
  interface page_category {
    id: string
    name: string
}
interface Option {
    value:any
    text:string
    page:Page
    
  }
interface page {
    access_token: string
    category: string
    category_list: Page_category
    id: string
    name: string
    tasks: Array<String>
    active: boolean
}


interface bank_providers {
  id:string
  name:string
}

interface bank_accounts {
  id:string
  created_at:string 
  updated_at:string 
  deleted_at:string
  user_id:string
  channel_id:string
  account_name:string
  account_number:string
  account_branch:string
  bank_provider_id:string
  is_verifired:string
  bank_provider_name:string
}

interface abutton {
  component: Object,
  title:string,
  variant:string,
  type:string,
  payload:string,
  step:boolean,
  open:boolean,
  action:string,
  id:number
}

interface channel_has_bank {
  id: string
  channel_id: string
  bank_account_id:string
  created_at:string 
  updated_at:string 
  deleted_at:string
}
class Page_category implements page_category {
  id=""
  name=""
}
interface tagin {
  label:string
  data:string
}
interface tag {
  label:string
  text:string
  data:string
}
interface voucher {
  amount:number
  value:number
  qty:number
  total:number
  expire: number

}
interface qcard {
  id:string
  title: string
  cardcompo: Object
  step:number
  nextstep:boolean
  mvisible:boolean 
  fixed: boolean
  isave:boolean
  iscancel:boolean
  text:string
  html:string
  json:object
  cardstyle:object
  active:boolean
  suggession:Array<any>
}

interface card {
  id:string
  type:string
   title: string
   cardcompo: Object
   insidecompo:Object
   cardshow:Object
   step:number
   nextstep:boolean
  mvisible:boolean 
  fixed: boolean
  isave:boolean
  iscancel:boolean
  text:string
  html:string
  json:object
  cardstyle:object
  active:boolean
  buttons:Array<abutton>
}

export interface IProduct {
  ID:string
  id:string
  product_id: string
  product_name: string
  product_type: string
  product_image: Array<string>
  img_url:Array<string>
  product_tag: Tag[]
  product_price: number
  product_logistype: Boolean
  product_firstprice: number
  product_secondprice: number
  product_weight: number
  product_skuno: string
  product_tagname:string
  product_qty: number
  product_unitcode: string
  product_category:string
  product_isave:boolean
  product_sub:SubProduct[]
  product_dayoffs:Doff[]
  product_message:Object[]
}

interface subproduct {
  product_id: string
  img: string
  id: number
  mode: number
  unitcode:string
  edited: boolean
  sku: string
  qty: string
  price: string
  tagid: Tag[]
  ebook:string[]
  voucher:Voucher[]
  reserved:Typetime[]
}


interface CardState {
  cards:Card;
}

interface StyleDay {
    key:string
    value:string
    itemstyle:object // { "--item-style": "#FFEB99" }
}
interface TypeTime {
    id: number
    day: number
    time: string
    qty: number
    week: boolean
    workday: boolean
    text:string
}
interface doff {
    key:number
    value:{
    text:string
    day:string
    show:boolean
    }
}
interface btnbox {
  icon:string,
  title:string,
  confirmButtonText:string,
  confirmButtonColor:string,
  cancalButtonText:string,
  cancelButtonColor:string

}

interface withdraw {
  bank_account_id:string,
  amount:number,
  status:boolean
}

export class Withdraw implements withdraw {
  bank_account_id=''
  amount=0
  status=false

}

export class Typetime implements TypeTime {
  id=0
  day=1
  time=''
  qty=0
  week=true
  workday=true
  text=''
}

export class Voucher implements voucher {
  
      amount = 0
      value=0
      qty=0
      total=0
      expire=180
  
}
export class QCard implements qcard {
     id=''
     title=''
     
     cardcompo={}
     step=0
     nextstep=false
     mvisible=false
     fixed= false
     isave=false
     iscancel=false
     text= ''
     html=''
     json= { text: ''}
     suggession = []
     cardstyle= {
         '--color-card': ''
     }
     active=false
}

export class Card implements card {
 
      id=''
      title=''
      type=''
      cardcompo={}
      cardshow={}
      insidecompo={}
      step=0
      nextstep=false
      mvisible=false
      fixed= false
      isave=false
      iscancel=false
      text= ''
      html=''
      json= {}
      buttons = [{component: Object,title:'',variant:'',type:'payload',payload:'',step:false,open:false,action:'',id:0}]
      cardstyle= {
          '--color-card': ''
      }
      active=false
}

export class Product implements IProduct {
   
      ID = ''
      id = ''
      product_id = ''
      product_name = ''
      product_tagname = ''
      product_type = ''
      product_image = []
      product_tag = new Array<Tag>()
      product_price = 0
      product_logistype = false
      product_firstprice = 0
      product_secondprice = 0
      product_weight = 0
      product_skuno = ''
      product_qty = 0
      product_isave  = false
      product_unitcode = ''
      product_category = ''
      product_sub=new Array<SubProduct>()
      product_dayoffs=new Array<Doff>()
      img_url=new Array<string>()
      product_message = new Array<Object>()
  
}
// export class SubProduct {
//   product_id: string
//   img: string
//   id: number
//   mode: number
//   unitcode:string
//   edited: boolean
//   sku: string
//   qty: string
//   price: string
//   tagid: object[]
//   ebook:string[]
//   voucher:Vouchers
//   reserved:TypeTimes[]
  
//   constructor(){
//       this.product_id= ""
//       this.img= ""
//       this.id=0,
//       this.mode=0
//       this.unitcode=""
//       this.edited=false
//       this.sku=""
//       this.tagid = []
//       this.qty="0"
//       this.price="0"
//       this.ebook = []
//       this.voucher = []
//       this.reserved=[]
    
//   }
// }
export class SubProduct implements subproduct {
  
      product_id= ""
      img= ""
      id=0
      mode=0
      unitcode=""
      edited=false
      sku=""
      tagid = [new Tag()]
      qty="0"
      price="0"
      ebook = []
      voucher = [new Voucher()]
      reserved=[new Typetime()]
}

export class BankProvider implements bank_providers {
  id= ''
  name= ''
}

export class ChannelHasBank {
  id=''
  channel_id=''
  bank_account_id=''
  created_at=''
  updated_at=''
  deleted_at=''
}

export class BankAccounts implements bank_accounts {
  id=''
  created_at=''
  updated_at=''
  deleted_at=''
  user_id=''
  channel_id=''
  account_name=''
  account_number=''
  account_branch=''
  bank_provider_id=''
  is_verifired=''
  bank_provider_name=''
}





export class Page implements page {

     
        access_token = ""
        category =  ''
        category_list =  new Page_category()
        id = ''
        name = ''
        tasks = ['']
        active = false

}


interface facebook {
    userID: string
    accessToken: string
    page: Page

}
const FILLABLE = [
    'accessToken', 'expiresIn', 'refreshToken', 'tokenType', 'idToken', 'scope'
]
interface line {
  accessToken:string 
  expiresIn:string
  refreshToken:string
  idToken:string
  scope:string
  tokenType:string
  data:string
  name:string
  img_url:string
  line_channel_secret:string
  line_channel_id:string
  line_channel_access_token:string
}

interface doff {
  key:number
  value:{
  text:string
  day:string
  show:boolean
  }
}

export class Doff implements doff {
        key=0
        value={text:'',day:'',show:false}
   
}
export interface IChannel {
    channel_id: string
    channel_name: string
    channel_fb_status: Boolean
    channel_fb_data: any
    channel_line_status:Boolean
    channel_line_id:string
    channel_line_data : line
    ID:string 
    CreatedAt:string 
    UpdatedAt:string 
    DeletedAt:string 
    user_id:string 
    name:string 
    bank_account_id:string
    fb_page:{}
    line_channel:{}
}



interface ThemeMode {
    layout:string,
    sidebarToggleProperties: {
      isSideNavOpen: boolean
      isSecondarySideNavOpen: boolean 
      isActiveSecondarySideNav: boolean
    }
}

export class Theme implements ThemeMode {
    layout= "default"
    sidebarToggleProperties  = {
      isSideNavOpen:true,
      isSecondarySideNavOpen:false,
      isActiveSecondarySideNav:false
    }
}

export class User implements AuthSession {
      isLogged=false
      username=""
      userid=""
      password=""
      token=""
      expire=""
      provider=""
      code=401
      email=""
      fname=""
      lname=""
      balance=0
   
 
}
 
export class LineUser implements line {
  accessToken = ''
  expiresIn = ''
  refreshToken = ''
  idToken = ''
  scope = ''
  tokenType = 'Bearer'
  data = ''
  name = ''
  img_url = ''
  line_channel_secret = ''
  line_channel_id =''
  line_channel_access_token=''
}

export class FBUser  implements facebook {
  userID=""
  accessToken= ""
  page = new Page()
}

export class Channel implements channel {
  
  channel_id = ''
  channel_name = ''
  channel_fb_status = false
  channel_fb_data = new FBUser
  channel_line_id=''
  channel_line_data = new LineUser
  channel_line_status=false
  ID=''
  CreatedAt=''
  UpdatedAt=''
  DeletedAt=''
  user_id=''
  name=''
  fb_page={}
  line_channel={}
  bank_account_id=""
}

export class Btnbox implements btnbox {
  icon=''
  title=''
  confirmButtonText=''
  confirmButtonColor=''
  cancalButtonText=''
  cancelButtonColor=''
}

export class Tag implements tag {
 
    label=""
    text=""
    data=""

}

export class TagIn implements tagin {
 
    label=""
    data=""
 }


export type Users = User
export type Channels = Channel
export type LineUsers = LineUser
export type Themes =  Theme
export type Options = Option
export type Products  = Product
//export type SubProducts = SubProduct
export type Banks = BankAccounts
export type Btnboxs = Btnbox
export type Tags = Tag[]
export type Tagers =  Tag
export type Doffs = Doff
export type TagIns = TagIn
export type TypeTimes = TypeTime


export type SubProducts=SubProduct[]
export type Pages = Page[]
export type FBUsers = FBUser[]
export type Cards = Card[]
export type Vouchers = Voucher[]
