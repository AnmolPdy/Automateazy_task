import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users:any[]=[];
  filteredUsers:any[]=[];
  minAge:number | null=null;
  maxAge:number | null=null;
  cityFilter:string="";
  companyFilter:string="";
  nameFilter:string="";


  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('component initialised');
    this.getAllUsers();
  }

  getAllUsers():void{
    this.http.get<{ users: any[] }>("https://dummyjson.com/users").subscribe(
      (res) => {
        this.users = res.users;
        this.totalItems = this.users.length;
        this.searchUsers(); 
        console.log('Users:', this.users); 
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }


  searchUsers(): void {
    let filtered = this.users.filter(user =>
      (this.nameFilter ? `${user.firstName} ${user.lastName}`.toLowerCase().includes(this.nameFilter.toLowerCase()) : true) &&
      (this.minAge !== null ? user.age >= this.minAge : true) &&
      (this.maxAge !== null ? user.age <= this.maxAge : true) &&
      (this.cityFilter ? user.address.city.toLowerCase().includes(this.cityFilter.toLowerCase()) : true) &&
      (this.companyFilter ? user.company.name.toLowerCase().includes(this.companyFilter.toLowerCase()) : true)
    );
    
    this.totalItems = filtered.length;
    this.filteredUsers = this.paginate(filtered);
  }




  paginate(users: any[]): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return users.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }



  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.searchUsers(); 
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.searchUsers(); 
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchUsers(); 
    }
  }
}
