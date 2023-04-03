!function(e){var t={};function a(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(0);function s(e,t){const a=t-1,s=t**2-t,r=t**2-1;switch(e){case 0:return"top-left";case a:return"top-right";case s:return"bottom-left";case r:return"bottom-right";default:return e>0&&e<a?"top":e>s&&e<r?"bottom":e%t==0?"left":e%t==t-1?"right":"center"}}class r{constructor(){this.boardSize=8,this.container=null,this.boardEl=null,this.cells=[],this.cellClickListeners=[],this.cellEnterListeners=[],this.cellLeaveListeners=[],this.newGameListeners=[],this.saveGameListeners=[],this.loadGameListeners=[]}bindToDOM(e){if(!(e instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=e}drawUi(e){this.checkBinding(),this.container.innerHTML='\n      <div class="controls">\n        <button data-id="action-restart" class="btn">New Game</button>\n        <button data-id="action-save" class="btn">Save Game</button>\n        <button data-id="action-load" class="btn">Load Game</button>\n      </div>\n      <div class="board-container">\n        <div data-id="board" class="board"></div>\n      </div>\n    ',this.newGameEl=this.container.querySelector("[data-id=action-restart]"),this.saveGameEl=this.container.querySelector("[data-id=action-save]"),this.loadGameEl=this.container.querySelector("[data-id=action-load]"),this.newGameEl.addEventListener("click",e=>this.onNewGameClick(e)),this.saveGameEl.addEventListener("click",e=>this.onSaveGameClick(e)),this.loadGameEl.addEventListener("click",e=>this.onLoadGameClick(e)),this.boardEl=this.container.querySelector("[data-id=board]"),this.boardEl.classList.add(e);for(let e=0;e<this.boardSize**2;e+=1){const t=document.createElement("div");t.classList.add("cell","map-tile","map-tile-"+s(e,this.boardSize)),t.addEventListener("mouseenter",e=>this.onCellEnter(e)),t.addEventListener("mouseleave",e=>this.onCellLeave(e)),t.addEventListener("click",e=>this.onCellClick(e)),this.boardEl.appendChild(t)}this.cells=Array.from(this.boardEl.children)}redrawPositions(e){for(const e of this.cells)e.innerHTML="";for(const a of e){const e=this.boardEl.children[a.position],s=document.createElement("div");s.classList.add("character",a.character.type);const r=document.createElement("div");r.classList.add("health-level");const i=document.createElement("div");i.classList.add("health-level-indicator","health-level-indicator-"+((t=a.character.health)<15?"critical":t<50?"normal":"high")),i.style.width=a.character.health+"%",r.appendChild(i),s.appendChild(r),e.appendChild(s)}var t}addCellEnterListener(e){this.cellEnterListeners.push(e)}addCellLeaveListener(e){this.cellLeaveListeners.push(e)}addCellClickListener(e){this.cellClickListeners.push(e)}addNewGameListener(e){this.newGameListeners.push(e)}addSaveGameListener(e){this.saveGameListeners.push(e)}addLoadGameListener(e){this.loadGameListeners.push(e)}onCellEnter(e){e.preventDefault();const t=this.cells.indexOf(e.currentTarget);this.cellEnterListeners.forEach(e=>e.call(null,t))}onCellLeave(e){e.preventDefault();const t=this.cells.indexOf(e.currentTarget);this.cellLeaveListeners.forEach(e=>e.call(null,t))}onCellClick(e){const t=this.cells.indexOf(e.currentTarget);this.cellClickListeners.forEach(e=>e.call(null,t))}onNewGameClick(e){e.preventDefault(),this.newGameListeners.forEach(e=>e.call(null))}onSaveGameClick(e){e.preventDefault(),this.saveGameListeners.forEach(e=>e.call(null))}onLoadGameClick(e){e.preventDefault(),this.loadGameListeners.forEach(e=>e.call(null))}static showError(e){alert(e)}static showMessage(e){alert(e)}selectCell(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yellow";this.deselectCell(e),this.cells[e].classList.add("selected","selected-"+t)}deselectCell(e){const t=this.cells[e];t.classList.remove(...Array.from(t.classList).filter(e=>e.startsWith("selected")))}showCellTooltip(e,t){this.cells[t].title=e}hideCellTooltip(e){this.cells[e].title=""}showDamage(e,t){return new Promise(a=>{const s=this.cells[e],r=document.createElement("span");r.textContent=t,r.classList.add("damage"),s.appendChild(r),r.addEventListener("animationend",()=>{s.removeChild(r),a()})})}setCursor(e){this.boardEl.style.cursor=e}checkBinding(){if(null===this.container)throw new Error("GamePlay not bind to DOM")}}class i{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"generic";if(this.level=e,this.attack=0,this.defence=0,this.health=50,this.type=t,"Character"===new.target.name)throw new Error("Невозможно создать персонажа!")}}const n=[class extends i{constructor(e){super(e),this.level=e,this.type="bowman",this.attack=25,this.defence=25,this.movementRange=2,this.attackRange=2}},class extends i{constructor(e){super(e),this.level=e,this.type="swordsman",this.attack=40,this.defence=10,this.movementRange=4,this.attackRange=1}},class extends i{constructor(e){super(e),this.level=e,this.type="magician",this.attack=10,this.defence=40,this.movementRange=1,this.attackRange=4}}],l=[class extends i{constructor(e){super(e),this.level=e,this.type="vampire",this.attack=25,this.defence=25,this.movementRange=2,this.attackRange=2}},class extends i{constructor(e){super(e),this.level=e,this.type="undead",this.attack=40,this.defence=10,this.movementRange=4,this.attackRange=1}},class extends i{constructor(e){super(e),this.level=e,this.type="daemon",this.attack=10,this.defence=40,this.movementRange=1,this.attackRange=4}}];class c{constructor(){this.characters=[],this.move=!0,this.selectedCharacter=null,this.movementCells=[],this.attackCells=[]}clear(){this.selectedCharacter=null,this.attackCells=[],this.movementCells=[]}setMovementCells(e){this.movementCells=e}setAttackCells(e){this.attackCells=e}setSelectedCharacter(e){this.selectedCharacter=e}addCharacter(e){this.characters.push(e)}moveCharacter(e){const t=this.selectedCharacter.position;this.characters=this.characters.map(a=>(a.position===t&&(a.position=e),a)),this.move=!this.move}attackCharacter(e,t){this.characters=this.characters.map(a=>(a.position===e&&(a.character.health=t),a)),this.move=!this.move}getCharacterByPosition(e){return this.characters.find(t=>t.position===e)}isFriendlyCharacter(e){const t=this.getCharacterByPosition(e),a=this.move?n:l;return!!t&&a.some(e=>t.character instanceof e)}isEnemyCharacter(e){const t=this.getCharacterByPosition(e),a=this.move?l:n;return!!t&&a.some(e=>t.character instanceof e)}isNotCharacter(e){return!(this.isFriendlyCharacter(e)||this.isEnemyCharacter(e))}static from(e){return null}}class o{constructor(e,t){if(!(e instanceof i))throw new Error("character must be instance of Character or its children");if("number"!=typeof t)throw new Error("position must be a number");this.character=e,this.position=t}}class h{constructor(e){this.members=[...e]}}var d={auto:"auto",pointer:"pointer",crosshair:"crosshair",notallowed:"not-allowed"};var m={prairie:"prairie",desert:"desert",arctic:"arctic",mountain:"mountain"};function*u(e,t){for(;;){const a=Math.floor(Math.random()*e.length),s=Math.floor(Math.random()*t)+1;yield new e[a](s)}}function g(e,t,a){const s=[];for(let r=0;r<a;r++)s.push(u(e,t).next().value);return s}class C{constructor(e,t){this.gamePlay=e,this.stateService=t,this.gameState=new c}init(){this.gamePlay.drawUi(m.prairie),this.gamePlay.addCellClickListener(this.onCellClick.bind(this)),this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this)),this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));const e=new h(g(n,1,2)),t=new h(g(l,1,2)),a=(e,t)=>{const s=[],{boardSize:r}=this.gamePlay;for(let t=0;t<r;t++)e.forEach(e=>s.push(e+r*t));const i=Math.floor(Math.random()*(s.length-1));return t.some(e=>e.position===s[i])?a(e,t):s[i]};e.members.forEach(e=>{const{characters:t}=this.gameState,s=a([0,1],t);this.gameState.addCharacter(new o(e,s))}),t.members.forEach(e=>{const{characters:t}=this.gameState,s=a([6,7],t);this.gameState.addCharacter(new o(e,s))}),this.gamePlay.redrawPositions(this.gameState.characters)}static calculateMovement(e,t){const{character:a,position:s}=e,[r,i]=C.getRow(s,t),n=Math.max(s-a.movementRange,r),l=Math.min(s+a.movementRange,i),c=[];for(let e=n;e<=l;e++){let r;const[i,n]=C.getCol(e,t),l=Math.abs(s-e);if(l)r=[e],e-l*t>=i&&r.push(e-l*t),e+l*t<=n&&r.push(e+l*t);else{r=[];const s=Math.max(e-a.movementRange*t,i),l=Math.min(e+a.movementRange*t,n);for(let e=s;e<=l;e+=t)r.push(e)}c.push(...r)}return c}static calculateAttack(e,t){const{character:a,position:s}=e,[r,i]=C.getRow(s,t),n=Math.max(s-a.attackRange,r),l=Math.min(s+a.attackRange,i),c=[];for(let e=n;e<=l;e++){const s=[e],[r,i]=C.getCol(e,t);for(let n=1;n<=a.attackRange;n++)e-n*t>=r&&s.push(e-n*t),e+n*t<=i&&s.push(e+n*t);c.push(...s)}return c}static calculateDamage(e,t){return Math.max(e-t,.1*e)}static getRow(e,t){const a=Math.floor(e/t);return[a*t,(a+1)*t-1]}static getCol(e,t){const a=Math.floor(e/t);return[e-a*t,e+(t-1-a)*t]}onCellClick(e){if(this.gameState.characters.forEach(e=>this.gamePlay.deselectCell(e.position)),this.gameState.isFriendlyCharacter(e)){const t=this.gameState.getCharacterByPosition(e);this.gameState.setSelectedCharacter(t);const a=C.calculateMovement(t,this.gamePlay.boardSize);this.gameState.setMovementCells(a);const s=C.calculateAttack(t,this.gamePlay.boardSize);return this.gameState.setAttackCells(s),void this.gamePlay.selectCell(e)}const{characters:t,selectedCharacter:a,movementCells:s,attackCells:i}=this.gameState;if(a){if(s.includes(e)&&this.gameState.isNotCharacter(e))return this.gameState.moveCharacter(e),this.gameState.clear(),this.gamePlay.deselectCell(e),void this.gamePlay.redrawPositions(t);if(i.includes(e)&&this.gameState.isEnemyCharacter(e)){const{character:s}=this.gameState.getCharacterByPosition(e),r=C.calculateDamage(a.character.attack,s.defence),i=s.health-r;return this.gameState.attackCharacter(e,i),this.gameState.clear(),this.gamePlay.deselectCell(e),this.gamePlay.redrawPositions(t),void this.gamePlay.showDamage(e,r)}}r.showError("Некорректный ход!")}onCellEnter(e){const t=this.gameState.getCharacterByPosition(e);if(t){const{level:a,attack:s,defence:r,health:i}=t.character,n=`🎖${a} ⚔${s} 🛡${r} ❤${i}`;this.gamePlay.showCellTooltip(n,e)}if(!this.gamePlay.boardEl)return;this.gameState.isFriendlyCharacter(e)?this.gamePlay.setCursor(d.pointer):this.gamePlay.setCursor(d.notallowed);const{selectedCharacter:a,movementCells:s,attackCells:r}=this.gameState;a&&(s.includes(e)&&this.gameState.isNotCharacter(e)&&(this.gamePlay.setCursor(d.pointer),this.gamePlay.selectCell(e,"green")),r.includes(e)&&this.gameState.isEnemyCharacter(e)&&(this.gamePlay.setCursor(d.crosshair),this.gamePlay.selectCell(e,"red")))}onCellLeave(e){this.gameState.selectedCharacter&&this.gameState.selectedCharacter.position!==e&&this.gamePlay.deselectCell(e)}}const v=new r;v.bindToDOM(document.querySelector("#game-container"));const f=new class{constructor(e){this.storage=e}save(e){this.storage.setItem("state",JSON.stringify(e))}load(){try{return JSON.parse(this.storage.getItem("state"))}catch(e){throw new Error("Invalid state")}}}(localStorage);new C(v,f).init()}]);