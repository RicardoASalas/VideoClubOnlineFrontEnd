import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user:User;
  private storagedToken:any;
  private numberRentingDays:any;
  private totalAmount:any;


  constructor(private httpClient:HttpClient) { }
  //Manda los datos del register form al back para ser registrados en la base de datos
  register(user:User):Observable<object>{
   
    return this.httpClient.post('http://localhost:3001/user/register', user)

  }
  // Comprueba que el usuario introducido en el form exista y sea correcto, en caso true devuelve token
  login(user:User):Observable<object>{

    return this.httpClient.patch('http://localhost:3001/user/login', user)

  }
  // Borra el token de usuario de la base de datos
  logout(token){
   
    this.storagedToken=JSON.parse(token);
    
    return this.httpClient.put('http://localhost:3001/user/logout',{},{headers: {Authorization: this.storagedToken.token }})
    
  }
  // Manda el token recibido del login al back para que de acceso al perfil de usuario
  profile(token){
    console.log("aqui tambien")
    this.storagedToken=JSON.parse(token)

    return this.httpClient.get('http://localhost:3001/user/profile',{headers: {Authorization: this.storagedToken.token }})

  }
  // Manda el id y el numero de dias de alquiler al back para que el pedido sea registrado en la base de datos
  rentMovie(movie, token){
    if(movie){
   
    this.storagedToken=JSON.parse(token)
    console.log(this.numberRentingDays+"    "+this.totalAmount)
    return this.httpClient.patch('http://localhost:3001/user/profile/order',
    {id: movie._id, numberRentingDays: this.numberRentingDays, payingAmount: this.totalAmount},
    {headers: {Authorization: this.storagedToken.token }})
    }
  }
  // Comprueba que haya un token guardado en la local Storage. devuelve true o false
  tokenExists(){
    if(localStorage.getItem('Authorization')){
     
      return true
    }
    else{
      return false
    }
  }
  // Recibe el numero de dias del componente movie-details, donde hemos hecho la accion de alquilar 
  //y calcula el precio total del alquiler asignandolo a la variable totalAmount
  getNumberRentingDays(numDays){
    console.log("entra en el getNumberRentingDays")
    this.numberRentingDays=numDays;
    
    this.totalAmount=parseInt(this.numberRentingDays)*1.8
    console.log(this.numberRentingDays+"    "+this.totalAmount)

  }

  

}
