import insta from './assets/instagram.jpeg';
import web from './assets/web.jpeg';

function App() {
	return (
		<div
			className='flex justify-center backdrop-blur'
			style={{
				backgroundImage: `url("https://img.freepik.com/premium-photo/grey-blur-background_76542-225.jpg?w=2000")`,
			}}
		>
			<body
				className='flex flex-col my-6 content-center max-w-xs h-auto rounded-b-lg'
				style={{
					border: '1px solid grey',
					borderRadius: '15px',
				}}
			>
				<img
					className='w-full h-auto rounded-t-lg object-cover'
					src='https://cloudinary-cdn.ffm.to/s--Lww2iJVo--/f_webp/https%3A%2F%2Fimagestore.ffm.to%2Flink%2Ff419f7e0f9d40fa85eedd9fc60777e17.jpg'
					alt=''
				/>

				<div className='flex w-full justify-between p-3 bg-slate-50'>
					<img
						className='h-auto w-2/6 object-scale-down'
						src='https://cloudinary-cdn.ffm.to/s--e_GXTT_B--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_spotify.png'
						alt=''
					/>
					<button className='bg-transparent max-h-12 w-2/6 hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded'>
						<a
							href='https://open.spotify.com/artist/57oieIojgviKMyTtzG4kn2'
							alt=''
							target='_blank'
							rel='noreferrer'
						>
							Listen
						</a>
					</button>
				</div>
				<div className='flex w-full justify-between p-3 border-y-2 border-slate-200 bg-slate-50'>
					<img
						className='h-auto w-2/6 object-scale-down'
						src='https://cloudinary-cdn.ffm.to/s--LpZFcfe0--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_applemusic_listen.png'
						alt=''
					/>
					<button className='bg-transparent max-h-12 w-2/6 hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded'>
						<a
							href='https://music.apple.com/nl/artist/waiting-for-smith/1192026265'
							alt=''
							target='_blank'
							rel='noreferrer'
						>
							Listen
						</a>
					</button>
				</div>

				<div className='flex w-full justify-between p-3 border-b-2 border-slate-200 bg-slate-50'>
					<img
						className='h-auto w-2/6 object-scale-down'
						src='https://cloudinary-cdn.ffm.to/s--BuOsZiLg--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_deezer.png'
						alt=''
					/>
					<button className='bg-transparent max-h-12 w-2/6 hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded'>
						<a
							href='https://www.deezer.com/us/artist/11654939'
							alt=''
							target='_blank'
							rel='noreferrer'
						>
							Listen
						</a>
					</button>
				</div>
				<div className='flex w-full justify-between p-3 border-b-2 border-slate-200 bg-slate-50'>
					<img
						className='h-auto w-2/6 object-scale-down'
						src='https://cloudinary-cdn.ffm.to/s--uf3wpRWG--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_amazon.png'
						alt=''
					/>
					<button className='bg-transparent max-h-12 w-2/6 hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded'>
						<a
							href='https://music.amazon.com/artists/B01MS44PHF/waiting-for-smith'
							alt=''
							target='_blank'
							rel='noreferrer'
						>
							Listen
						</a>
					</button>
				</div>
				<div className='flex w-full justify-between p-3 border-b-2 border-slate-200 bg-slate-50'>
					<img
						className='h-auto w-2/6 object-scale-down'
						src='https://cloudinary-cdn.ffm.to/s--wJHSivtl--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_tidal.png'
						alt=''
					/>
					<button className='bg-transparent max-h-12 w-2/6 hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded'>
						<a
							href='https://tidal.com/browse/artist/8406140'
							alt=''
							target='_blank'
							rel='noreferrer'
						>
							Listen
						</a>
					</button>
				</div>
				<div className='flex w-full justify-between p-3 border-b-2 border-slate-200 bg-slate-50 '>
					<img
						className='h-auto w-2/6 object-scale-down'
						src='https://cloudinary-cdn.ffm.to/s--abCrNs3k--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_pandora.png'
						alt=''
					/>
					<button className='bg-transparent max-h-12 w-2/6 hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded'>
						<a
							href='https://api.ffm.to/sl/e/c/hopelessness-of-love?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTIuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXIiOnsibmFtZSI6IkNocm9tZSIsInZlcnNpb24iOiIxMTIuMC4wLjAiLCJtYWpvciI6IjExMiJ9LCJlbmdpbmUiOnsibmFtZSI6IkJsaW5rIiwidmVyc2lvbiI6IjExMi4wLjAuMCJ9LCJvcyI6eyJuYW1lIjoiTWFjIE9TIiwidmVyc2lvbiI6IjEwLjE1LjcifSwiZGV2aWNlIjp7fSwiY3B1Ijp7fX0sImNsaWVudCI6eyJyaWQiOiJkMmFhYTY0ZC04ZWE4LTRhNzQtYmQ4YS01Mjg3Mzg2NWI0MWYiLCJzaWQiOiJiMTg5MTVkMi00N2E4LTQ1ZDUtOGY1MS0yMWQ2MmRiOTZmZjgiLCJpcCI6IjE3OC44NS42Ni4xNTMiLCJyZWYiOiJodHRwczovL2wuZmFjZWJvb2suY29tLyIsImhvc3QiOiJkaXR0by5mbSIsImxhbmciOiJlbi1VUyIsImlwQ291bnRyeSI6Ik5MIn0sImlzV2VicFN1cHBvcnRlZCI6dHJ1ZSwiaXNGcm9tRVUiOnRydWUsImNvdW50cnlDb2RlIjoiTkwiLCJ1c2VBZmYiOiJvcmlnaW4iLCJpZCI6IjYwNzBmOGQxNDUwMDAwMTMwMDU2MGQ0ZiIsInBydiI6ZmFsc2UsImlzUHJlUiI6ZmFsc2UsInR6byI6bnVsbCwiY2giOm51bGwsImFuIjpudWxsLCJkZXN0VXJsIjoiaHR0cHM6Ly9wYW5kb3JhLmFwcC5saW5rLz8kZGVza3RvcF91cmw9aHR0cHMlM0ElMkYlMkZ3d3cucGFuZG9yYS5jb20lMkZhcnRpc3QlMkZ3YWl0aW5nLWZvci1zbWl0aCUyRmxpbmVzLW9mLWxvdmUtc2luZ2xlJTJGQUw1S2xmaDduNzUyNHBjJiRpb3NfZGVlcGxpbmtfcGF0aD1wYW5kb3JhdjQlM0ElMkYlMkZiYWNrc3RhZ2UlMkZhbGJ1bSUzRnRva2VuJTNEQUwlM0E1NTg5MDA2JiRhbmRyb2lkX2RlZXBsaW5rX3BhdGg9cGFuZG9yYXY0JTNBJTJGJTJGYmFja3N0YWdlJTJGYWxidW0lM0Z0b2tlbiUzREFMJTNBNTU4OTAwNiZ-Y2hhbm5lbD1QYXJ0bmVyJTIwQ2F0YWxvZyUyMFNlYXJjaCUyMEFQSSIsInZpZCI6ImI1YWFkMDJjLTM1NmMtNDMwYi1iZDY4LWJhMTdjODUyZGU3MSIsInNydmMiOiJwYW5kb3JhIiwicHJvZHVjdCI6InNtYXJ0bGluayIsInNob3J0SWQiOiJob3BlbGVzc25lc3Mtb2YtbG92ZSIsImlzQXV0aG9yaXphdGlvblJlcXVpcmVkIjpmYWxzZSwib3duZXIiOiI1YzUwYjUxZDE0MDAwMDE5MDA2ODY4OTEiLCJ0ZW5hbnQiOiI1ZDJjMjk2M2YwZDUxZWViZDI0ZTc3ODciLCJhciI6IjVjYTNiODcyMGUwMDAwMGJhMzliYzRlMiIsImlzU2hvcnRMaW5rIjpmYWxzZX0'
							alt=''
							target='_blank'
							rel='noreferrer'
						>
							Listen
						</a>
					</button>
				</div>

				<div className='flex w-full justify-between border-b-2 border-slate-200 p-3 bg-slate-50'>
					<img className='h-auto w-1/6 object-scale-down' src={insta} alt='' />
					<button className='bg-transparent max-h-12 w-2/6 hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded'>
						<a
							href='https://www.instagram.com/waitingforsmith/?hl=en'
							alt=''
							target='_blank'
							rel='noreferrer'
						>
							Follow
						</a>
					</button>
				</div>
				<div className='flex w-full justify-between p-3 bg-slate-50 rounded-b-lg'>
					<img className='h-auto w-1/6 object-scale-down' src={web} alt='' />
					<button className='bg-transparent max-h-10 w-2/6 hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded'>
						<a
							href='https://www.waitingforsmith.co.uk/'
							alt=''
							target='_blank'
							rel='noreferrer'
						>
							Explore
						</a>
					</button>
				</div>
			</body>
		</div>
	);
}

export default App;
