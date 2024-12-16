import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { PokeInterface } from '../../interfaces/pokemon.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, RouterLink, RouterOutlet,Router } from '@angular/router';

@Component({
  selector: 'app-poke',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke.component.html',
  styleUrl: './poke.component.scss'
})
export class PokeComponent implements OnInit {
  pokenList2: PokeInterface[] = []; 
  

  
  constructor(private pokeService: PokeService, private route: ActivatedRoute, private router: Router) {}
  

  ngOnInit(): void {
    this.idPersonaje = +this.route.snapshot.paramMap.get('id')!;
    
    

    this.getPokemonById();
  }
  

  getPokemonById(): void {
    this.pokeService.getPokemonById(this.idPersonaje).subscribe({
      next: (result) => {
        this.pokenList2 = [result]; 
        
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  volver(url:string): void{
    this.router.navigate([url])
  }
}