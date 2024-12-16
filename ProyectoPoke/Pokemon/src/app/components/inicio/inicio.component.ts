import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { PokeInterface } from '../../interfaces/pokemon.interface';
import { Router, RouterLink, RouterOutlet } from '@angular/router'; // Asegúrate de importar Router
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Aquí se importa ActivatedRoute


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  personajeList: PokeInterface[] = [];

  constructor(private pokeService: PokeService, private route: ActivatedRoute, private router: Router) {} // Inyectar Router

  ngOnInit(): void {
    this.getPokemon();
  }

  // Método para obtener los personajes
  getPokemon(): void {
    this.pokeService.getPokemon().subscribe({
      next: (result) => {
        this.personajeList = result.results; // Suponiendo que result tiene una lista llamada 'results'
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  navegar(id: number): void {
    this.router.navigateByUrl(`/poke/${id}`);
  }
  
  
    
  }
