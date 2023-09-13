<script>
	import { onMount } from 'svelte';

	/*
  Inspired by: "Error, 404"
  By: Sujeet Mishra
  Link: https://dribbble.com/shots/4571035-Error-404
*/

	onMount(() => {
		let oh = document.querySelector('.circle.oh');
		document.addEventListener('mousemove', (event) => {
			let domainX = [0, document.body.clientWidth],
				domainY = [0, document.body.clientHeight],
				range = [-10, 10];

			let translate = {
				x:
					range[0] +
					((event.clientX - domainX[0]) * (range[1] - range[0])) / (domainX[1] - domainX[0]),
				y:
					range[0] +
					((event.clientY - domainY[0]) * (range[1] - range[0])) / (domainY[1] - domainY[0])
			};

			oh.style.animation = 'none';
			oh.style.transform = `translate(${translate.x}px, ${translate.y}px)`;
		});

		document.addEventListener('mouseleave', (event) => {
			oh.style.animation = 'floating 3s linear infinite';
		});
	});
</script>

<div class="stars">
	{#each Array(80) as _, index}
		<div class="star" />
	{/each}
</div>
<div class="center">
	<div class="circle circle--outer" />
	<div class="circle circle--inner">
		<div class="four four--1">4</div>
		<div class="four four--2">4</div>
		<div class="circle oh">
			<div class="astronaut">
				<div class="astronaut-backpack" />
				<div class="astronaut-head" />
				<div class="astronaut-antena antena--left">
					<div class="ear-down" />
					<div class="ear-up" />
					<div class="antena" />
					<div class="antena-tip" />
				</div>
				<div class="astronaut-antena antena--right">
					<div class="ear-down" />
					<div class="ear-up" />
					<div class="antena" />
					<div class="antena-tip" />
				</div>
				<div class="astronaut-helmet">
					<div class="astronaut-glass" />
					<div class="glow glow--1" />
					<div class="glow glow--2" />
				</div>
				<div class="astronaut-body" />
			</div>
			<svg class="astronaut-wire" viewBox="-9 -9 259 823" width="259" height="823">
				<path
					d="M241 0c-24 54-30 113-78 148S63 159 27 215c-35 55 32 102 73 141s103 94 98 166c-6 97-169 66-192 157-10 43-8 84 9 126"
					fill="none"
					stroke-width="6"
					stroke="#FFF"
				/>
			</svg>
			<div class="circle planet">
				<div class="craters">
					{#each Array(6) as _, i}
						<div class="crater crater--{i + 1}" />
					{/each}
				</div>
			</div>
			<div class="astronaut-hands">
				<div class="astronaut-hand hand--left">
					<svg width="35" height="75">
						<path
							d="M30.23 17.209c-7.925 5.118-11.657 12.786-11.226 22.975-7.113.934-12.948 4.345-18.44 5.117C-1.951 26.539 3.92 9.346 18.635 1.369 30.66-4.39 39.53 9.398 30.23 17.209z"
							fill="#D2D2D2"
						/>
						<g fill="none" stroke="#999" stroke-linecap="round">
							<path
								d="M11.78 6.977c7.983.129 13.547 3.968 16.308 11.111M4.67 17.161c7.307-.379 13.1 1.924 17.93 6.94"
							/>
							<path
								d="M.816 31.334c6.439-2.441 12.295-1.746 18.149 2.488"
								stroke-linejoin="round"
							/>
						</g>
						<g fill="#fff">
							<path
								d="M7.721 37.171c5.875-1.994 12.264 1.156 14.258 7.031l1.218 3.588c1.995 5.875-1.156 12.264-7.03 14.258-5.875 1.995-12.264-1.156-14.259-7.031L.69 51.429c-1.994-5.875 1.156-12.263 7.031-14.258z"
							/>
							<path
								d="M7.829 38.159c5.794-1.967 12.094 1.14 14.061 6.934l5.044 14.855c1.967 5.794-1.14 12.095-6.934 14.062-5.794 1.967-12.095-1.14-14.062-6.934L.895 52.221c-1.967-5.794 1.14-12.095 6.934-14.062z"
							/>
							<path
								d="M16.863 39.472l12.879 7.384a3.876 3.876 0 0 1 1.433 5.287 3.875 3.875 0 0 1-5.286 1.433l-12.878-7.384a3.874 3.874 0 0 1-1.434-5.286 3.874 3.874 0 0 1 5.286-1.434z"
							/>
						</g>
					</svg>
				</div>
				<div class="astronaut-hand hand--right">
					<svg width="35" height="75">
						<path
							d="M30.23 17.209c-7.925 5.118-11.657 12.786-11.226 22.975-7.113.934-12.948 4.345-18.44 5.117C-1.951 26.539 3.92 9.346 18.635 1.369 30.66-4.39 39.53 9.398 30.23 17.209z"
							fill="#D2D2D2"
						/>
						<g fill="none" stroke="#999" stroke-linecap="round">
							<path
								d="M11.78 6.977c7.983.129 13.547 3.968 16.308 11.111M4.67 17.161c7.307-.379 13.1 1.924 17.93 6.94"
							/>
							<path
								d="M.816 31.334c6.439-2.441 12.295-1.746 18.149 2.488"
								stroke-linejoin="round"
							/>
						</g>
						<g fill="#fff">
							<path
								d="M7.721 37.171c5.875-1.994 12.264 1.156 14.258 7.031l1.218 3.588c1.995 5.875-1.156 12.264-7.03 14.258-5.875 1.995-12.264-1.156-14.259-7.031L.69 51.429c-1.994-5.875 1.156-12.263 7.031-14.258z"
							/>
							<path
								d="M7.829 38.159c5.794-1.967 12.094 1.14 14.061 6.934l5.044 14.855c1.967 5.794-1.14 12.095-6.934 14.062-5.794 1.967-12.095-1.14-14.062-6.934L.895 52.221c-1.967-5.794 1.14-12.095 6.934-14.062z"
							/>
							<path
								d="M16.863 39.472l12.879 7.384a3.876 3.876 0 0 1 1.433 5.287 3.875 3.875 0 0 1-5.286 1.433l-12.878-7.384a3.874 3.874 0 0 1-1.434-5.286 3.874 3.874 0 0 1 5.286-1.434z"
							/>
						</g>
					</svg>
				</div>
			</div>
		</div>
		<div class="button">GO HOME</div>
	</div>
	<div class="sorry">Oops! Sorry, page not found.</div>
</div>

<style lang="scss">
  @function randomNum($a, $b) {
    @return floor(random() * ($b - $a + 1) + $a)
  }
	* {
		box-sizing: border-box;
	}

	@media screen and (max-height: 600px) {
		.center {
			transform: translate(-50%, -50%) scale(0.75);
		}
	}

	// Media query para max-width
	@media screen and (max-width: 400px) {
		.center {
			transform: translate(-50%, -50%) scale(0.6);
		}
	}

	// Keyframes para blink
	@keyframes blink {
		0%,
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	// Keyframes para floating
	@keyframes floating {
		0%,
		100% {
			transform: translate(1px, -3px) rotate(1deg);
		}

		20% {
			transform: translate(randomNum(-3, 3) px, randomNum(-3, 3) px) rotate(randomNum(-2, 2) deg);
		}
		40% {
			transform: translate(randomNum(-3, 3) px, randomNum(-3, 3) px) rotate(randomNum(-2, 2) deg);
		}
		60% {
			transform: translate(randomNum(-3, 3) px, randomNum(-3, 3) px) rotate(randomNum(-2, 2) deg);
		}
		80% {
			transform: translate(randomNum(-3, 3) px, randomNum(-3, 3) px) rotate(randomNum(-2, 2) deg);
		}
	}

	@-moz-keyframes blink {
		0%,
		100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(0.4);
			opacity: 0.5;
		}
		20% {
			transform: translate(-3px, -1px) rotate(-1deg);
		}
		40% {
			transform: translate(2px, -1px) rotate(2deg);
		}
		60% {
			transform: translate(3px, 1px) rotate(0deg);
		}
		80% {
			transform: translate(2px, 3px) rotate(-1deg);
		}
	}

	:global(body) {
		width: 100vw;
		height: calc(100vh - 65px);
		overflow: hidden;
		font-size: 12px;
		background-image: linear-gradient(to right bottom, #a9347e, #4b32a7);
		font-family: 'Open Sans', sans-serif;
		letter-spacing: 0.2px;
		color: #fff;
	}
	.inspiration {
		position: fixed;
		bottom: 0;
		right: 0;
		padding: 10px;
		text-align: center;
		text-decoration: none;
		font-family: 'Gill Sans', sans-serif;
		font-size: 14px;
		color: #ff487f;
	}
	.center {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: transform 0.5s;
		z-index: 1;
	}

	.star {
		position: absolute;
		z-index: 1;
	}

	@for $i from 1 through 80 {
		$size: randomNum(4, 0) + 1px;

		.star:nth-child(#{$i}) {
			top: randomNum(100,0) + 0vh;
			left: randomNum(100,0) + 0vw;

			&:before,
			&:after {
				position: absolute;
				content: '';
				background-color: white;
				border-radius: 10px;
				animation: blink 1.5s infinite;
				animation-delay: $i * -1s;
			}

			&:before {
				top: calc($size / 2);
				left: - calc($size / 2);
				width: calc(3 * $size);
				height: $size;
			}

			&:after {
				top: - calc($size / 2);
				left: calc($size / 2);
				width: $size;
				height: calc(3 * $size);
			}
		}
	}

	.circle {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
	}
	.circle--outer {
		width: 550px;
		height: 550px;
		background-image: linear-gradient(to right bottom, #802b89, #5631a1);
		box-shadow: 0px 0px 20px -8px #000;
	}
	.circle--inner {
		width: 355px;
		height: 355px;
		background-image: linear-gradient(to right bottom, #75278b, #5530a2);
		box-shadow: 0px 0px 20px -8px #000;
	}
	.four {
		position: absolute;
		font-size: 150px;
		font-weight: 900;
		text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
		user-select: none;
	}
	.four--1 {
		top: 100px;
		left: 30px;
		z-index: 1;
	}
	.four--2 {
		top: 100px;
		left: 230px;
		z-index: 3;
	}
	.astronaut {
		position: absolute;
		top: -115px;
		left: -30px;
		transform: rotate(17deg);
		.astronaut-backpack {
			width: 100px;
			height: 100px;
			background-color: #e3e3e3;
			border-radius: 10px;
		}
		.antena--left {
			left: 10px;
			.antena {
				left: 5px;
			}
			.antena-tip {
				left: 3px;
			}
		}
		.antena--right {
			right: 10px;
			.antena {
				right: 5px;
			}
			.antena-tip {
				right: 3px;
			}
		}
		.astronaut-antena {
			position: absolute;
			top: -7px;
			.ear-down {
				position: absolute;
				bottom: -5px;
				width: 15px;
				height: 20px;
				border-radius: 5px;
				background-color: #afafaf;
				z-index: 1;
			}
			.ear-up {
				position: relative;
				width: 15px;
				height: 20px;
				border-radius: 5px;
				background-color: #c3c3c3;
				z-index: 2;
			}
			.antena {
				position: absolute;
				top: -29px;
				width: 2px;
				height: 30px;
				border-radius: 5px;
				background-color: #c3c3c3;
			}
			.antena-tip {
				position: absolute;
				top: -33px;
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background-color: #c3c3c3;
			}
		}
		.astronaut-helmet {
			position: absolute;
			top: -30px;
			left: 50%;
			width: 66px;
			height: 66px;
			border-radius: 50%;
			background-color: #fff;
			box-shadow: 0px 5px 1px -3px #808080;
			transform: translateX(-50%);
			z-index: 3;
			overflow: hidden;
		}
		.astronaut-glass {
			position: absolute;
			top: 13px;
			left: 5px;
			width: 56px;
			height: 56px;
			background: #00202e;
			border-radius: 10px;
		}
		.glow {
			position: absolute;
			border-radius: 50%;
			background-color: #334d57;
		}
		.glow--1 {
			top: 25px;
			left: 15px;
			width: 17px;
			height: 17px;
		}
		.glow--2 {
			top: 44px;
			left: 13px;
			width: 7px;
			height: 7px;
		}
		.astronaut-body {
			position: absolute;
			top: 30px;
			left: 50%;
			width: 50px;
			height: 50px;
			background-color: #c3c3c3;
			transform: translateX(-50%);
		}
	}
	.astronaut-wire {
		position: absolute;
		top: -40px;
		left: -260px;
	}
	.astronaut-hands {
		position: absolute;
		top: -89px;
		left: -23px;
		width: 100px;
		transform: rotate(17deg);
		z-index: 3;
		.astronaut-hand {
			position: absolute;
		}
		.hand--left {
			left: -3px;
		}
		.hand--right {
			transform: scaleX(-1);
			right: -3px;
		}
	}
	.oh {
		transition: all 0.1s linear !important;
		animation: floating 4s linear infinite !important;
		z-index: 2;
	}
	.planet {
		background-color: #ff4980;
		box-shadow: inset -6px -10px 0px 1px #cc3b6b, 0px 2px 10px rgba(0, 0, 0, 0.4);
		width: 155px;
		height: 155px;
	}
	.craters {
		.crater {
			position: absolute;
			border-radius: 50%;
			background-color: #c93667;
		}
		.crater--1 {
			width: 35px;
			height: 35px;
			top: 30px;
			left: 25px;
		}
		.crater--2 {
			width: 23px;
			height: 23px;
			top: 20px;
			left: 93px;
		}
		.crater--3 {
			width: 17px;
			height: 17px;
			top: 77px;
			left: 17px;
		}
		.crater--4 {
			width: 10px;
			height: 10px;
			top: 90px;
			left: 80px;
		}
		.crater--5 {
			width: 25px;
			height: 25px;
			top: 115px;
			left: 50px;
		}
		.crater--6 {
			width: 13px;
			height: 13px;
			top: 118px;
			left: 105px;
		}
	}
	.button {
		position: absolute;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		padding: 8px 12px;
		border: 1px solid #fff;
		border-radius: 3px;
		cursor: pointer;
		z-index: 999;
		&:active {
			transform: translateX(-50%) scale(0.95);
		}
	}
	.sorry {
		position: absolute;
		top: 210px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 15px;
	}
</style>
