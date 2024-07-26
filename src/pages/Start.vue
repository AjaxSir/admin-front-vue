<template>
	<div class="home">
		<div class="progress-cont">
			<h4>首次进入比较耗时，请稍等...</h4>
			<div class="progress-main">
				<div class="progress"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
    const percentages = ref(0)
    const router = useRouter()
    onMounted(() => {
        const progress = document.querySelector('.progress');
        progress.addEventListener('animationend', () =>{
            router.push({
                path: "/room"
            })
        })
    })
</script>

<style lang="scss" scoped>
	.home {
		width: 100vw;
		height: 100vh;
		background: url('@/assets/images/start-cat.png') no-repeat;
		background-size: cover;
		position: relative;
		.progress-cont {
			position: absolute;
			width: 70%;
			left: 15%;
			bottom: 60px;
			text-align: center;
            h4{
                color: #676bb3;    
                text-shadow: 1px -1px 0 #dda13e, 1px -1px 0 #dda13e, -1px 1px 0 #dda13e, 1px 1px 0 #dda13e;
            }
			.progress-main {
                @function generate-box-shadow($i, $color:'#dda13e'){
                    $result: "";
                    @for $j from 1 through $i {
                        $result: $result + "inset 0 0 " + $j + "px "  + $j + "px " + $color;
                        @if $j < $i {
                            $result: $result + ", ";
                        }
                    }
                    @return unquote($result);
                }
				height: 30px;
				border-radius: 15px;
                margin-top: 10px;
                box-shadow: generate-box-shadow(4, '#fff');
                overflow: hidden;
                .progress{
                    // width: 100%;
                    animation: percentage 2s ease 1;
                    box-shadow: generate-box-shadow(4, '#fff');
                    background: #dda13e;
                    height: 100%;
                }
                @keyframes percentage {
                    0%{
                        width: 0%;
                    }
                    40%{
                        width: 30%;
                    }
                    70%{
                        width: 80%;
                    }
                    100%{
                        width: 100%;
                    }
                }
			}
		}
	}
</style>
