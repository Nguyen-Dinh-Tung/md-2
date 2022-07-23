import * as rl from "readline-sync"
import {CstMenuMain} from './class/Constant'
import { menu } from "./menu/menu";
import * as MenuMain from './menu/menuMain'
// var
let app = rl.question
let choice = -1 ;

// handle request

MenuMain.questionMain(choice,menu,app,CstMenuMain)
// questionExtra(choice,menu,app,Constant)

menu()
